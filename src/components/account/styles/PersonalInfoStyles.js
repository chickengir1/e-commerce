import styled from "styled-components";

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #7485bc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
`;

export const Button = styled.button`
  width: 8rem;
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

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border: 2px solid #aaa;
  border-radius: 50%;
`;

export const AvatarSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 23px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
`;
