import React from "react";

import CustomButtonWrapper from "./custom-button.styles";

export const customButton = ({children, ...props}) => <CustomButtonWrapper {...props}>{children}</CustomButtonWrapper>;

export default customButton;
