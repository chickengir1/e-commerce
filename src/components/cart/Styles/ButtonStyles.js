import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #C53A3A;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  text-transform: uppercase;
  text-align: center;
  position: relative;
  text-decoration: none;
  display: inline-block;
  overflow: hidden;
  font-family: var(--font-nanumfont);

  &:before {
    content: "";
    position: absolute;
    bottom: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background: #fff;
    display: block;
    transform-origin: right top;
    transform: scale(0, 1);
    transition: transform 0.4s cubic-bezier(1, 0, 0, 1);
  }

  &:hover::before {
    transform-origin: left top;
    transform: scale(1, 1);
  }

  &:hover {
    background-color: #333;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const StyledShoppingButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 20px;
  border: 1px solid #fff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #fff;
  position: relative;
  overflow: hidden;
  background: transparent;
  transition: all 0.3s ease-in-out;
  z-index: 10;
  font-family: var(--font-nanumfont);
  font-weight: 500;

  &:hover {
    color: #515B7C;
    font-weight: bold;
    font-family: var(--font-nanumfont);
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 0%;
    height: 100%;
    display: block;
    -ms-transform: skewX(-20deg);
    -webkit-transform: skewX(-20deg);
    transform: skewX(-20deg);
    left: -10%;
    top: 0;
    transition: all 0.7s cubic-bezier(0.77, 0, 0.175, 1);
  }

  &:before {
    background: #97A6D9;
    z-index: -12;
    opacity: 1;
  }

  &:after {
    background: #7485BC;
    z-index: -15;
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.2, 0.95, 0.57, 0.99);
  }

  &:hover:before {
    opacity: 1;
    width: 116%;
  }

  &:hover:after {
    opacity: 1;
    width: 120%;
  }
`;
