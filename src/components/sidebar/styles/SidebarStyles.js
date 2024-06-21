import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SidebarContainer = styled.div`
  background-color: #fff;
  border-right: 1px solid #ddd;
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuContainer = styled.div`
  width: 100%;
`;

export const MenuItemContainer = styled.div`
  display: flex;
  padding: 16px 20px;
  margin-bottom: 1rem;
  border-bottom: 3px solid #d1dcfd;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  position: relative;
  overflow: hidden;
  background: transparent;
  transition: all 0.3s ease-in-out;
  z-index: 10;
  &:hover {
    font-weight: bold;
    transform: scale(1.02);
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 0%;
    height: 100%;
    display: block;
    transform: skewX(-20deg);
    left: -10%;
    top: 95%;
    transition: all 0.7s cubic-bezier(0.77, 0, 0.175, 1);
  }

  &:before {
    background: #97a6d9;
    z-index: -12;
    opacity: 1;
  }

  &:after {
    background: #7485bc;
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

export const MenuIcon = styled(FontAwesomeIcon)`
  margin-left: 0.5rem;
  margin-right: 3rem;
  width: 1.5rem;
`;

export const UserInfoContainer = styled.div`
  margin-bottom: 20px;
  background-color: #f4f7ff;
  border-radius: 8px;
  padding: 20px;
  border: 3px solid #d0d8ee;
  width: 100%;
`;

export const UserBox = styled.div`
  text-align: center;
`;

export const UserAvatar = styled.img`
  width: 80px;
  height: 80px;
  padding: 2px;
  border: 2px solid #93a0cc;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const UserText = styled.div`
  margin: 5px 0;
  font-weight: bold;
`;

export const UserEmail = styled.div`
  margin: 5px 0;
  color: #666;
`;
