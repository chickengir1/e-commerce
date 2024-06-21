import styled, { css } from "styled-components";

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #57638a;
`;

export const LineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15px;
  margin-top: 20px;
  margin-bottom: 25px;
  font-size: 14px;
  color: #57638a;
`;

export const Line = styled.div`
  flex: 1;
  height: 1px;
  margin: 0 15px;
  background-color: #7485bc;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
`;

export const VerticalContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export const LoginSection = styled.div`
  width: 50%;
  margin-left: 4rem;
  padding: 6rem;
`;

const fadeIn = css`
  opacity: 0;
  transform: translateX(-40px);
  transition: opacity 2s ease-out, transform 0.6s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = css`
  opacity: 0;
  transform: translateX(40px);
  transition: opacity 2s ease-out, transform 0.6s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AnimatedBlackBox = styled.div`
  ${fadeIn}
  border-top-left-radius: 20%;
  border-bottom-left-radius: 20%;
  background: linear-gradient(to right, #6a85b6, #bac8e0);
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 20px;
`;

export const AnimatedwhitekBox = styled.div`
  ${fadeOut}
  border-top-right-radius: 20%;
  border-bottom-right-radius: 20%;
  background: linear-gradient(to right, #6a85b6, #bac8e0);
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 20px;
`;
