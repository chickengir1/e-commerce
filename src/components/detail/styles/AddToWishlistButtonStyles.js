import styled, { keyframes } from "styled-components";

const shinyBtn1 = keyframes`
  0% { transform: scale(0) rotate(45deg); opacity: 0; }
  80% { transform: scale(0) rotate(45deg); opacity: 0.5; }
  81% { transform: scale(4) rotate(45deg); opacity: 1; }
  100% { transform: scale(50) rotate(45deg); opacity: 0; }
`;

export const CheckoutButton = styled.button`
  position: relative;
  padding: 15px;
  background: #FFE07A;
  border: none;
  border-radius: 5px;
  color: #C27319;
  overflow: hidden;
  cursor: pointer;
  width: 50%;
  font-size: 16px;
  margin-bottom: 10px;
  font-family: var(--font-nanumfont);

  &:hover {
    text-decoration: none;
    color: #fff;
    background-color: #FFC45A;
  }

  &:active {
    box-shadow: 4px 4px 6px 0 rgba(255,255,255,0.3),
                -4px -4px 6px 0 rgba(116, 125, 136, 0.2), 
                inset -4px -4px 6px 0 rgba(255,255,255,0.2),
                inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2);
  }

  &:before {
    position: absolute;
    content: '';
    display: inline-block;
    top: -180px;
    left: 0;
    width: 30px;
    height: 100%;
    background-color: #fff;
    animation: ${shinyBtn1} 3s ease-in-out infinite;
  }
`;

export const WishlistButton = styled(CheckoutButton)`
  background: #7485BC;
  border-radius: 5px;
  color: #fff;
  font-family: var(--font-nanumfont);

  &:hover {
    background: #D1DCFD;
    color: #506BC1;
  }

  &:before {
    display: none;
  }
`;
