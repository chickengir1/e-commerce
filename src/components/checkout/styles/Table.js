import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #97A3C9;
`;

export const THead = styled.thead`
  background-color: #F4F6F9;
`;

export const TBody = styled.tbody``;

export const TableRow = styled.tr`
  border-bottom: 1px solid #97A3C9;
`;

export const Cell = styled.td`
  padding: 16px;
  text-align: center;

  &:first-child {
    text-align: left;
    padding-left: 45px;
  }

  &:last-child {
    text-align: center;
  }
`;

export const ProductCell = styled.td`
  padding-left: 16px;
`;

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
`;

export const ProductImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 8px;
`;

export const ProductDetails = styled.div`
  text-align: left;
`;

export const ProductName = styled.div``;

export const ProductDescription = styled.div`
  color: #666;
  font-size: 12px;
`;
