import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import {cartVisibilitySelector} from "../../redux/cart/cart.selector";
import {userSelector} from "../../redux/user/user.selectors";

import {ReactComponent as Logo} from "../../assets/crown.svg";
import {auth} from "../../firebase/firebase.utils.js";

import Cart from "../cart/cart.component.jsx";
import CartDropdown from "../cart-dropdown/cart-dropdown.component.jsx";

import {HeaderWrapper, OptionLinkWrapper, OptionDivWrapper, LogoWrapper, OptionsWrapper} from "./header.styles";

const Header = ({currentUser, hidden}) => (
  <HeaderWrapper>
    <LogoWrapper to="/">
      <Logo className="logo" />
    </LogoWrapper>
    <OptionsWrapper>
      <OptionLinkWrapper to="/shop">SHOP</OptionLinkWrapper>
      <OptionLinkWrapper to="/shop">CONTACT</OptionLinkWrapper>
      {currentUser ? (
        <OptionDivWrapper
          onClick={() => {
            auth.signOut();
          }}
        >
          SIGN OUT
        </OptionDivWrapper>
      ) : (
        <OptionLinkWrapper to="/signin">SIGN IN</OptionLinkWrapper>
      )}
      <Cart />
    </OptionsWrapper>
    {hidden ? null : <CartDropdown></CartDropdown>}
  </HeaderWrapper>
);

const mapStateToProps = createStructuredSelector({
  currentUser: userSelector,
  hidden: cartVisibilitySelector,
});

export default connect(mapStateToProps)(Header);
