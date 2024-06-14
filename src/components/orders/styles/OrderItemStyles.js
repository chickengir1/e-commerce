import styled from "styled-components";

export const OrderDate = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const OrderStatus = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const OrderProduct = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const OrderPrice = styled.div`
  font-size: 14px;
  color: #999;
  margin-top: 8px;
  margin-right: 8px;
`;

export const OrderActionsButton = styled.button`
  font-size: 14px;
  padding: 8px 16px;
  border: 1px solid #7485BC;
  border-radius: 4px;
  background-color: #fff;
  color: #000;
  cursor: pointer;
  font-family: var(--font-nanumfont);

  &:hover {
    background-color: rgba(151, 163, 201, 0.5);
  }
`;
