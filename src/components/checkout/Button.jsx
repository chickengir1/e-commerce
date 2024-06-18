import React from 'react';
import { ButtonWrapper } from './styles';

const Button = ({ children, onClick = () => {}, ...props }) => (
  <ButtonWrapper onClick={onClick} role="button" {...props}>
    {children}
  </ButtonWrapper>
);

export default Button;