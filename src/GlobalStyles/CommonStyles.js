import styled from "styled-components";

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

export const StyledLabel = styled.span`
  font-size: ${(props) => props.size};
  color: #333;
  padding-top: 5px;
`;

export const StyledInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
`;
