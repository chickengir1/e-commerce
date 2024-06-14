import React from 'react';
import { ButtonWrapper } from './styles';

const Button = ({ children, onClick = () => {} }) => (
  <ButtonWrapper 
    onClick={onClick} 
    role="button" 
  >
    {children}
  </ButtonWrapper>
);

export default Button;
