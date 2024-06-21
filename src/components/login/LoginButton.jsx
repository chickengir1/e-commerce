import React from 'react';
import {RegisterButton} from "../register/styles/RegisterButtonStyles"

const LoginButton = ({ type, disabled, children }) => (
  <RegisterButton type={type} disabled={disabled}>
    {children}
  </RegisterButton>
);

export default LoginButton;