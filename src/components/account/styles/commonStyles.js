import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin-bottom: 50px;
`;

export const Section = styled.div`
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  color: #151515;
  margin-bottom: 20px;
  font-size: 1.5em;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 18px;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InputSection = styled.div`
  width: 100%;
  margin-right: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const InstructionsSection = styled.div`
  display: flex;
  padding: 30px;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  margin-top: 22px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-family: var(--font-nanumfont);
`;
