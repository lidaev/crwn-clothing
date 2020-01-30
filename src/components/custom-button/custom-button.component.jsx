import React from "react";

import "./custom-button.styles.scss";

export const customButton = ({children, ...otherProps}) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

export default customButton;
