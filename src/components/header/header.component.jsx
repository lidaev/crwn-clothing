import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { cartVisibilitySelector } from "../../redux/cart/cart.selector";
import { userSelector } from "../../redux/user/user.selectors";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils.js";

import "./header.styles.scss";

import Cart from "../cart/cart.component.jsx";
import CartDropdown from "../cart-dropdown/cart-dropdown.component.jsx";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div
          className="option"
          onClick={() => {
            auth.signOut();
          }}
        >
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <Cart />
    </div>
    {hidden ? null : <CartDropdown></CartDropdown>}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: userSelector,
  hidden: cartVisibilitySelector
});

export default connect(mapStateToProps)(Header);
