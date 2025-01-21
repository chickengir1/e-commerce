import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border: 1px solid #7485bc;
  border-bottom: 2px solid #8690ae;
  border-right: 2px solid #8690ae;
  margin-bottom: 20px;
  background-color: #fefeff;
  border-radius: 8px;
  padding: 20px;
`;

export const CartItemImageContainer = styled.div`
  width: 80px;
  height: 80px;
  margin-right: 20px;
`;

export const CartItemInfo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const CartItemPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
`