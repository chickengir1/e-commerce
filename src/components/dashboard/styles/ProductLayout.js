import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  border-radius: 8px;
  border: 1px solid #eee;
  overflow: hidden;
  border-bottom: 5px solid #eee;
`;

export const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
  background-color: #fff;
  min-width: 150px;
  max-width: 150px;
`;

export const TableHeaderImg = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
  background-color: #fff;
  min-width: 50px;
`;

export const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
  min-width: 150px;
  max-width: 150px;

  &:first-child {
    border-left: 0;
  }

  &:last-child {
    border-right: 0;
  }
`;

export const TableCellImg = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
  min-width: 50px;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }

  &:first-child th {
    border-top: 0;
  }

  &:last-child td {
    border-bottom: 0;
  }
`;

export const ActionButton = styled.button`
  margin-right: 5px;
  padding: 5px 10px;
  background-color: #000;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
  transition: background-color 0.3s;
  display: inline-flex;
  align-items: center;

  &:hover {
    background-color: #555;
  }

  i {
    margin-right: 5px;
  }
`;

export const ImagePlaceholder = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ddd;
  display: inline-block;
  border-radius: 4px;
`;

export const ProductInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

export const ProductButton = styled.button`
  background-color: #333;
  width: 100%;
  height: 3rem;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s;
  font-family: var(--font-nanumfont);

  &:hover {
    background-color: #555;
  }
`;

export const PaginationMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 92%;
  }
`;

export const PaginationContainer = styled.div`
  margin-top: 20px;
  span {
    margin: 0 10px;
    font-size: 16px;
  }
`;

export const PaginationButton = styled.button`
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 auto;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
  font-family: var(--font-nanumfont);

  &:hover {
    background-color: #555;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
