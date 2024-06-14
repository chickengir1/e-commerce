import styled from "styled-components";

export const StyledImage = styled.img`
  width: 100%;
  min-height: 150px;
  max-height: 150px;
  object-fit: cover;
  aspect-ratio: 16/9;
  border: 1px solid #ddd;
  border-radius: 10px;
  display: block;
`;

export const StyledText = styled.p`
  margin: 5px 0;
  font-size: ${({ type }) => (type === "h2" ? "16px" : "12px")};
  font-weight: ${({ type }) => (type === "h2" ? "bold" : "normal")};
  line-height: ${({ type }) => (type === "h2" ? "1.2rem" : "1rem")};
  display: block;
  color: ${({ type }) => (type === "description" ? "gray" : "black")};
`;
