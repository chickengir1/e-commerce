import styled, { keyframes } from "styled-components";

const slide = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

const Container = styled.div`
  width: 85%;
  overflow: hidden;
  position: relative;
  margin-bottom: 5rem;
`;

const SliderWrapper = styled.div`
  display: flex;
  width: 100%;
  animation: ${slide} 30s linear infinite;
`;

const Item = styled.div`
  flex: 1 0 20%;
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
`;

const Img = styled.img`
  width: 100%;
  height: 150px;
  border: 1px solid #ddd;
  border-radius: 8px;
  object-fit: cover;
  padding: 5px;
  margin-bottom: 5px;
`;

const Name = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Price = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`;

export { Container, SliderWrapper, Item, Img, Name, Price };
