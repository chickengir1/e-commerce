import styled from "styled-components";

export const SlideContainer = styled.div`
  flex: 0 0 auto;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 1280px;
  height: 400px;
  object-fit: contain;
`;

export const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 430px;
  overflow: hidden;
  align-items: center;
  margin: 0 auto;
`;

export const SliderWrapper = styled.div`
  display: flex;
  transition: transform 0.3s ease-out;
  width: fit-content;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  height: 50px;
  margin: 10px auto;
  margin-bottom: 8rem;
`;

export const PrevButton = styled.button`
  color: #000;
  border: none;
  padding: 10px;
  cursor: pointer;
  background-color: transparent;
`;

export const NextButton = styled.button`
  color: #000;
  border: none;
  padding: 10px;
  cursor: pointer;
  background-color: transparent;
`;

export const PageIndicator = styled.div`
  color: #000;
  font-size: 16px;
`;
