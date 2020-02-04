import React from "react";

import "./sign-up.styles.scss";

import FormInput from "../form-input/form-input.component.jsx";
import CustomButton from "../custom-button/custom-button.component.jsx";

import {auth, createUserProfileDocument} from "../../firebase/firebase.utils.js";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  signUp = () => console.log("Signup");

  handleSubmit = async event => {
    event.preventDefault();

    const {displayName, email, password, confirmPassword} = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      createUserProfileDocument(user, {displayName});
    } catch (error) {
      console.log("Error", error);
    }
  };

  handleChange = event => {
    const {value, name} = event.target;

    this.setState({[name]: value});
  };

  render() {
    const {displayName, email, password, confirmPassword} = this.state;

    return (
      <div className="sign-up">
        <h2>I do not have an account</h2>
        <span>Sign up with email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            label="name"
            type="text"
            value={displayName}
            handleChange={this.handleChange}
            required
          ></FormInput>
          <FormInput
            name="email"
            label="email"
            type="email"
            value={email}
            handleChange={this.handleChange}
            required
          ></FormInput>
          <FormInput
            name="password"
            label="Password"
            type="password"
            value={password}
            handleChange={this.handleChange}
            required
          ></FormInput>
          <FormInput
            name="confirmPassword"
            label="Confirm password"
            type="password"
            value={confirmPassword}
            handleChange={this.handleChange}
            required
          ></FormInput>
          <CustomButton type="submit">Sign up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
