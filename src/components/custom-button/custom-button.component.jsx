import React from "react";

import "./custom-button.styles.scss";

export const customButton = ({children, isGoogleSignIn, ...otherProps}) => (
  <button className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default customButton;
