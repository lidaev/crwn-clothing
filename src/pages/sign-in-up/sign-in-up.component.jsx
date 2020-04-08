import React from "react";

import SignIn from "../../components/sign-in/sign-in.component.jsx";
import SignUp from "../../components/sign-up/sign-up.component.jsx";

import {SignInUpWrapper} from "./sign-in-up.styles";

const SignInUpPage = () => (
  <SignInUpWrapper>
    <SignIn />
    <SignUp />
  </SignInUpWrapper>
);

export default SignInUpPage;
