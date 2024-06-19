import styled from "styled-components";

export const Container = styled.div`
  width: 93%;
  margin: 0 auto;
  margin-top: 50px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  background-color: #e2e8f0;
`;

export const Th = styled.th`
  padding: 0.5rem;
  text-align: center;
`;

export const DateTh = styled.th`
  padding: 0.5rem;
  text-align: center;
  width: 235px;
`;

export const UserTh = styled.th`
  padding: 0.5rem;
  text-align: center;
  width: 155px;
`;

export const ProductTh = styled.th`
  padding: 0.5rem;
  text-align: center;
  width: 290px;
`;

export const OrderTh = styled.th`
  padding: 0.5rem;
  text-align: center;
  width: 140px;
`;

export const Tr = styled.tr`
  border-bottom: 1px solid #e2e8f0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Td = styled.td`
  padding: 0.5rem;
  text-align: center;
`;

export const NumTd = styled.td`
  padding: 0.5rem;
  text-align: center;
`;

export const Select = styled.select`
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #cbd5e0;
`;

export const StatusTd = styled.td`
  padding: 0.5rem;
  text-align: center;
`;

export const BtnTd = styled.td`
  padding: 0.5rem;
  text-align: center;
`;

export const Button = styled.button`
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  border: none;
  background-color: #e53e3e;
  color: white;
  cursor: pointer;
  width: 70px;
  height: 30px;
  font-family: var(--font-nanumfont);

  &:hover {
    background-color: #c53030;
  }
`;
