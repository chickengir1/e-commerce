import React from 'react';
import { StyledImage } from './styles/SkeletonStyles';

const Image = ({ src, alt }) => {
  const placeholderSrc = 'https://via.placeholder.com/250';
  return (
    <StyledImage src={src || placeholderSrc} alt={alt} />
  );
};

export default Image;
