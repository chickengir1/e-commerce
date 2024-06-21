import styled from "styled-components";

export const CardImage = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 200px;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 1);
  overflow: hidden;
`;

export const CardDetails = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
`;

export const CardNumber = styled.div`
  font-size: 1.2rem;
  letter-spacing: 2px;
`;

export const CardHolder = styled.div`
  font-size: 1rem;
  margin-top: 10px;
`;

export const ExpirationDate = styled.div`
  font-size: 1rem;
  margin-top: 10px;
`;

export const CardIcons = styled.div`
  position: absolute;
  width: 100%;
  top: 20px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

export const Icon = styled.div`
  font-size: 2rem;
  color: white;
`;
