import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Label = ({ children }) => <StyledLabel>{children}</StyledLabel>;

export default Label;
