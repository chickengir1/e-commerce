import styled from "styled-components";

export const CartListContainer = styled.div`
  padding: 20px;
`;

export const CartListHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 3rem;
`;

export const CartListTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 24px;
`;

export const CartCheck = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  button {
    margin-left: auto;
    margin-right: 20px;
  }
`