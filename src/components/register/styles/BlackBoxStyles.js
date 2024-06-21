import styled from "styled-components";

export const WelcomeTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const WelcomeText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

export const SignInButton = styled.button`
  padding: 10px 20px;
  width: 8rem;
  height: 4rem;
  font-size: 1rem;
  color: #fff;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  font-family: var(--font-nanumfont);

  &:hover {
    background-color: white;
    color: #6a85b6;
  }
`;
