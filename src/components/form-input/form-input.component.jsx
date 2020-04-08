import React from "react";

import {GroupWrapper, FormInputWrapper, FormInputLabelWrapper} from "./form-input.styles";

const FormInput = ({handleChange, label, ...otherProps}) => (
  <GroupWrapper>
    <FormInputWrapper onChange={handleChange} {...otherProps}></FormInputWrapper>
    {label ? (
      <FormInputLabelWrapper className={`${otherProps.value.length ? "shrink" : ""} form-input-label`}>
        {label}
      </FormInputLabelWrapper>
    ) : null}
  </GroupWrapper>
);

export default FormInput;
