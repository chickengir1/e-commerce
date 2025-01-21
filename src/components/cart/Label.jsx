import React from 'react';
import { StyledLabel } from '../../GlobalStyles/CommonStyles';

const Label = ({ children, size }) => (
  <StyledLabel size={size }>{children}</StyledLabel>
);

export default Label;
