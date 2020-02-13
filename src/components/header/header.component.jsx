import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {ReactComponent as Logo} from "../../assets/crown.svg";
import {auth} from "../../firebase/firebase.utils.js";

import "./header.styles.scss";

import Cart from "../cart/cart.component.jsx";
import CartDropdown from "../cart-dropdown/cart-dropdown.component.jsx";

const Header = ({currentUser, hidden}) => (
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

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
  currentUser: currentUser,
  hidden: hidden
});

export default connect(mapStateToProps)(Header);
