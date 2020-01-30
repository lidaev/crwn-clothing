import React from "react";

import "./form-input.styles.scss";

const FormInput = ({handleChange, label, ...otherProps}) => (
  <div className="form-input">
    <div className="group">
      <input className="form-input" onChange={handleChange}></input>
      {label ? <label className={`${otherProps.value.length ? "shrink" : ""} form-input-label`}>{label}</label> : null}
    </div>
  </div>
);

export default FormInput;
