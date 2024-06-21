import styled from "styled-components";

const Header = styled.header`
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 10%;
  background-color: #d1dae6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  box-sizing: border-box;
`;

const Logo = styled.img`
  height: 40px;
  cursor: pointer;
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  position: relative;
  font-size: 20px;
  color: #6d85a8;
  font-weight: 500;
  margin-left: 40px;
  text-decoration: none;
  line-height: 1;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #6d85a8;
    transition: 0.3s;
  }

  &:hover::before {
    width: 100%;
  }

  visibility: ${(props) => (props.invisible ? "hidden" : "visible")};
`;

const SearchContainer = styled.div`
  height: 20px;
  position: relative;
  display: flex;
  margin-left: 40px;
`;

const SearchButton = styled.button`
  height: 20px;
  font-size: 20px;
  color: #6d85a8;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  transition: transform 0.3s ease;
  line-height: 1;
  font-family: var(--font-nanumfont);

  &::before {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #6d85a8;
    transition: 0.3s;
  }

  &:hover::before {
    width: 100%;
  }
`;

const SearchInput = styled.input`
  font-size: 20px;
  color: #6d85a8;
  font-weight: 500;
  border: none;
  border-bottom: 2px solid transparent;
  outline: none;
  background: transparent;
  transition: border-bottom 0.3s, width 0.3s, opacity 0.3s;
  border-bottom: 2px solid #6d85a8;
  width: 0;
  opacity: 0;
  visibility: hidden;
  margin-right: 0;
  padding-right: 0;

  &.active {
    width: 200px;
    opacity: 1;
    visibility: visible;
    margin-right: 10px;
    padding-right: 10px;
  }
`;

export {
  Header,
  Logo,
  Navbar,
  NavLink,
  SearchContainer,
  SearchButton,
  SearchInput,
};
