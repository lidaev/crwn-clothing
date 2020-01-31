import React from "react";
import "./App.css";
import {Route, Switch} from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component.jsx";
import SignInUpPage from "./pages/sign-in-up/sign-in-up.component.jsx";

import Header from "./components/header/header.component.jsx";

import {auth} from "./firebase/firebase.utils.js";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsibscribeFromAuth = null;

  componentDidMount() {
    this.unsibscribeFromAuth = auth.onAuthStateChanged(user => this.setState({currentUser: user}));
  }

  componentWillUnmount() {
    this.unsibscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
