import styled from "styled-components";

export const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 12px;
  border: 1px solid #d1dcfd;
  border-radius: 5px;
  font-size: 15px;
  margin: 0 0 20px 0;
  display: flex;
  flex-direction: column;

  &:focus-within {
    border: 1px solid #7485bc;
    outline: none;
  }
`;
