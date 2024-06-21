import styled from "styled-components";

export const Card = styled.div`
  overflow: hidden;
  border: 1px solid #97a3c9;
  border-radius: 8px;
  width: 450px;
  height: 320px;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: #eef2ff;
  padding: 16px;
`;

export const Grid = styled.div`
  display: grid;
  gap: 0.5rem;
`;

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.125rem;
  font-weight: bold;
  position: relative;
`;

export const CardDescription = styled.div`
  font-size: 0.875rem;
  color: #666;
  padding-top: 2px;
`;

export const CardContent = styled.div`
  padding: 24px;
  font-size: 0.875rem;
`;

export const Address = styled.div`
  display: grid;
  gap: 4px;
  font-style: normal;
  font-size: 0.9rem;
  color: #888;

  .address {
    margin-top: 5px;
  }
`;

export const Input = styled.input`
  font-size: 0.9rem;
  width: 100%;
  border: 1px soild #ddd;
  margin-top: 5px;
  font-family: var(--font-nanumfont);
  padding: 2px;
`;

export const Separator = styled.div`
  margin: 25px 0 20px 0;
  height: 1px;
  background-color: #dae1f4;
`;

export const Button = styled.button`
  padding: 8px 16px;
  border: 1px solid #97a3c9;
  border-radius: 4px;
  background-color: #fff;
  color: #000;
  cursor: pointer;
  margin-right: 8px;
  font-family: var(--font-nanumfont);

  &:hover {
    background-color: rgba(151, 163, 201, 0.5);
  }
`;
