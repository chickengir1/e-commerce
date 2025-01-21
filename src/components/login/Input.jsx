import React from "react";
import { StyledInput } from "../register/styles/RegisterInputStyles";
import { PlaceholderSpan } from "../register/styles/PlaceholderSpanStyles";

const Input = ({ type, placeholder, value, onChange, required }) => {
  return (
    <>
      <PlaceholderSpan>{placeholder}</PlaceholderSpan>
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </>
  );
};

export default Input;
