import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  padding: 30px;
`;

export const Items = styled.div`
  flex: 1 1 calc(23% - 16px);
  max-width: calc(23% - 16px);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: start;
`;

export const Card = styled.div`
  padding: 5px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border-radius: 5px;
`;

export const TextContainer = styled.div`
  padding: 5px;
  &:hover {
    background-color: #e9e9e9;
    cursor: pointer;
    border-radius: 5px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  background: #fff;
`;

export const LineContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
