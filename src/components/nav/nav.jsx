import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header, Logo, Navbar, NavLink, SearchContainer, SearchButton, SearchInput } from './Stylednav';
import useAuthStatus from '../../hook/useAuthStatus';
import usePostRequest from '../../hook/useLogoutRequest';
import API_PATHS from '../../utils/apiPaths';

const NavBar = ({ setSearchQuery, searchInputRef }) => {
  const { isLoggedIn, setIsLoggedIn } = useAuthStatus();
  const [searchActive, setSearchActive] = useState(false);
  const navigate = useNavigate();
  const { logout } = usePostRequest(API_PATHS.LOGOUT);

  const handleSearch = () => {
    if (searchActive && setSearchQuery && searchInputRef) {
      setSearchQuery(searchInputRef.current);
    }
    setSearchActive(prev => !prev);
  };

  const handleLogout = async () => {
    try {
      console.log('세션 삭제');
      sessionStorage.removeItem('session');
      setIsLoggedIn(false);
      console.log('로그아웃 요청 전송');
      await logout();
      console.log('홈으로 이동');
      navigate('/');
    } catch (error) {
      console.error('로그아웃 요청 중 오류가 발생했습니다:', error.message);
    }
  };

  return (
    <Header>
      <Logo src="/assets/logo2.png" onClick={() => navigate('/')} />
      <Navbar>
        {setSearchQuery && searchInputRef && (
          <SearchContainer>
            <SearchInput
              type='text'
              placeholder='SEARCH'
              className={searchActive ? 'active' : ''}
              onChange={e => {
                if (searchInputRef) searchInputRef.current = e.target.value;
              }}
            />
            <SearchButton className={searchActive ? 'active' : ''} onClick={handleSearch}>
              {searchActive ? 'CLICK' : 'SEARCH'}
            </SearchButton>
          </SearchContainer>
        )}
        {isLoggedIn ? (
          <>
            <NavLink onClick={handleLogout}>LOGOUT</NavLink>
            <NavLink onClick={() => navigate('/carts')}>CART</NavLink>
            <NavLink onClick={() => navigate('/account')}>MYPAGE</NavLink>
          </>
        ) : (
          <NavLink onClick={() => navigate('/login')}>LOGIN</NavLink>
        )}
      </Navbar>
    </Header>
  );
};

export default NavBar;
