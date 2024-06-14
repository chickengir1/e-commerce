import React from 'react';
import { InputWrapper, Label, StyledInput, StyledInputHigh } from './styles/InputStyles';

const Input = ({ label, high, type = "text", value, onChange, placeholder, name }) => (
  <InputWrapper>
    <Label>{label}</Label>
    {high ? (
      <StyledInputHigh
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
      />
    ) : (
      <StyledInput
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
      />
    )}
  </InputWrapper>
);

export default Input;
