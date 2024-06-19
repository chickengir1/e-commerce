import styled, { keyframes } from "styled-components";

export const slide = (itemCount) => keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-${itemCount * 16}%); }
`;

export const Container = styled.div`
  width: 85%;
  height: 100%;
  overflow: hidden;
  position: relative;
  padding-top: 1rem;
  margin-bottom: 5rem;
`;

export const SliderWrapper = styled.div`
  display: flex;
  animation: ${({ $itemCount }) => slide($itemCount)} 50s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

export const Item = styled.div`
  flex: 0 0 20%;
  height: 21rem;
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(134,144,174, 0.1), 0 6px 15px rgba(134,144,174, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-16px);
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 15rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 5px;
`;

export const Name = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Price = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`;
