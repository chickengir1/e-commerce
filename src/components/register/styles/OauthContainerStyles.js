import styled from "styled-components";

export const OauthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
`;

export const BtnContainer = styled.button`
  padding: 15px;
  margin-top: 15px;
  border: 1px solid #aaa;
  border-radius: 15px;
  background: none;
  color: inherit;
  font-size: 14px;
  margin-right: 2rem;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;
