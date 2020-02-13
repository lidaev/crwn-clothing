import React from "react";
import "./App.css";
import {Route, Switch, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component.jsx";
import SignInUpPage from "./pages/sign-in-up/sign-in-up.component.jsx";

import Header from "./components/header/header.component.jsx";
import CartDropdown from "./components/cart-dropdown/cart-dropdown.component.jsx";

import {auth, createUserProfileDocument} from "./firebase/firebase.utils.js";

import {setCurrentUser, addCartItem} from "./redux/user/user.actions.js";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        this.props.setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() => (this.props.currentUser ? <Redirect to="/" /> : <SignInUpPage />)}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  addCartItem: item => dispatch(addCartItem(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
