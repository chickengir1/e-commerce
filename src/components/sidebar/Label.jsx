import React from 'react';
import { StyledLabel } from '../../GlobalStyles/CommonStyles';

const Label = ({ children, size }) => (
  <div>
    <StyledLabel size={size}>{children}</StyledLabel>
  </div>
);

export default Label;
