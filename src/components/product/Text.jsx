import React from 'react';
import { StyledText } from './styles/SkeletonStyles';

const Text = ({ children, type }) => (
  <StyledText type={type}>{children}</StyledText>
);

export default Text;
