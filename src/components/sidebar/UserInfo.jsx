import React from 'react';
import { UserInfoContainer, UserBox, UserAvatar, UserText, UserEmail } from './styles/SidebarStyles';
import useUserInfo from '../../hook/useUserInfo';

const UserInfo = () => {
  const { user, loading, error } = useUserInfo();

  if (loading) return <p>Loading...</p>;
  if (error) return null;

  const Mockuser = {
    avatar: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png',
    phone: '전화번호를 입력해주세요'
  };

  const defaultUser = {
    name: 'GUEST',
    email: '엘리스 스토어입니다',
    phoneNumber: Mockuser.phone
  };

  const displayedUser = user || defaultUser;

  return (
    <>
      <UserBox>
        <UserAvatar src={Mockuser.avatar} alt="User Avatar" />
      </UserBox>
      <UserInfoContainer>
        <UserText>{displayedUser.name}님 안녕하세요</UserText>
        <UserEmail>{displayedUser.email}</UserEmail>
        <UserEmail>{displayedUser.phoneNumber}</UserEmail>
      </UserInfoContainer>
    </>
  );
};

export default UserInfo;
