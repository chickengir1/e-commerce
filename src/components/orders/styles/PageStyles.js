import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  background: #F4F6F9;
  width: 95%;
  margin: 0 auto;
  border-radius: 15px;
  border: 1px solid #97A3C9;
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border: 1px solid #DAE1F4;
  border-radius: 8px;
  padding: 16px;
  background: #fff;
  box-sizing: border-box;
`;

export const OrderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const OrderLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
`;

export const OrderRightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 12px;
`;

export const ProductDetails = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 8px;
`;

export const OrderActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  text-align: end;
`;
