import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
  background: #f4f6f9;
  width: 95%;
  margin: 0 auto;
  border-radius: 15px;
  border: 1px solid #97a3c9;
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 calc(50% - 32px);
  border: 1px solid #dae1f4;
  border-radius: 8px;
  padding: 16px;
  background: #fff;
  box-sizing: border-box;
  margin-bottom: 16px;
`;

export const OrderContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  flex-direction: row;
  width: 100%;
`;

export const ProductImage = styled.img`
  width: 50px;
  height: 60px;
  margin-right: 8px;
`;

export const OrderActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  text-align: end;
`;
