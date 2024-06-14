import styled from "styled-components";

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #7485bc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 5px;
`;

export const Button = styled.button`
  width: 8rem;
  height: 3rem;
  font-size: 16px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #7485bc;
  color: white;
  cursor: pointer;
  font-family: var(--font-nanumfont);

  &:hover {
    background-color: #455186;
  }
`;

export const DelBtn = styled.button`
  width: 8rem;
  font-size: 16px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #b40404;
  color: white;
  cursor: pointer;
  margin-left: 20px;
  font-family: var(--font-nanumfont);

  &:hover {
    background-color: darkred;
  }
`;

export const ReadOnlyInput = styled.div`
  padding: 10px;
  border: 1px solid #7485bc;
  border-radius: 4px;
  letter-spacing: 5px;
  margin-top: 30px;
  margin-bottom: 5px;
`;
