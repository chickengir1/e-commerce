import React from "react";
import { StyledText } from "./styles/SkeletonStyles";
import { StyledImage } from "./styles/SkeletonStyles";

export const Image = ({ src, alt }) => {
  const placeholderSrc = "https://via.placeholder.com/250";
  return <StyledImage src={src || placeholderSrc} alt={alt} />;
};

export const Text = ({ children, type }) => (
  <StyledText type={type}>{children}</StyledText>
);
