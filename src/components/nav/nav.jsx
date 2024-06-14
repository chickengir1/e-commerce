import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Header, Logo, Navbar, NavLink, SearchContainer, SearchButton, SearchInput } from './Stylednav.js';

const NavBar = ({ setSearchQuery, searchInputRef }) => {
  const [searchActive, setSearchActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [cookies, , removeCookie] = useCookies(['loginstate', 'userCookie', 'adminCookie']);

  useEffect(() => {
    if (cookies.loginstate || cookies.userCookie || cookies.adminCookie) {
      setIsLoggedIn(true);
    }
  }, [cookies]);

  const handleSearchClick = () => {
    if (searchActive) {
      setSearchQuery(searchInputRef.current);
    }
    setSearchActive((prev) => !prev);
  };

  const handleSearchChange = (e) => {
    searchInputRef.current = e.target.value;
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('api/login/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        removeCookie('loginstate');
        removeCookie('userCookie');
        removeCookie('adminCookie');
        setIsLoggedIn(false);
        console.log('성공적으로 로그아웃되었습니다.');
        navigate('/');
      } else {
        console.error('로그아웃에 실패했습니다.');
      }
    } catch (error) {
      console.error('로그아웃 요청 중 오류가 발생했습니다.', error);
    }
  };

  return (
    <Header>
      <Logo src="/public/logo2.png" onClick={() => handleNavigation('/')} />
      <Navbar>
        <SearchContainer>
          <SearchInput 
            type="text" 
            placeholder="SEARCH" 
            className={searchActive ? 'active' : ''} 
            onChange={handleSearchChange}
          />
          <SearchButton 
            className={searchActive ? 'active' : ''} 
            onClick={handleSearchClick}
          >
            {searchActive ? 'CLICK' : 'SEARCH'}
          </SearchButton>
        </SearchContainer>
        {isLoggedIn ? (
          <>
            <NavLink onClick={handleLogout}>LOGOUT</NavLink>
            <NavLink onClick={() => handleNavigation('/carts')}>CART</NavLink>
            <NavLink onClick={() => handleNavigation('/account')}>MYPAGE</NavLink>
          </>
        ) : (
          <NavLink onClick={() => handleNavigation('/login')}>LOGIN</NavLink>
        )}
      </Navbar>
    </Header>
  );
};

export default NavBar;
