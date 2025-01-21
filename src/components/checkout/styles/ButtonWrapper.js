import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  margin: 0 auto;
  margin-top: 1rem;
  border-bottom: 1px solid #eee;
  border-radius: 10px;
  background: #97a6d9;
  color: #fff;
  cursor: pointer;
  width: 30%;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background: #7485bc;
    color: #ccc;
  }
`;

export { ButtonWrapper };
