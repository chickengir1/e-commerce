import React from 'react';
import Account from '../components/account/Account';
import Sidebar from '../components/sidebar/Sidebar';
import { PageLayout, SidebarLayout, ContentLayout } from '../GlobalStyles/LayoutStyles';
import NavBar from '../components/nav/nav';
import useUserInfo from '../hook/useUserInfo';

const AccountPage = () => {
  const { user, loading, error } = useUserInfo();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const Mockuser = {
    avatar: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png'
  };

  const defaultUser = {
    name: 'GUEST',
    email: '엘리스 스토어입니다'
  };

  const displayedUser = user || defaultUser;

  return (
    <>
      <NavBar />
      <PageLayout>
        <SidebarLayout>
          <Sidebar user={user} />
        </SidebarLayout>
        <ContentLayout>
          <Account user={displayedUser} Mockuser={Mockuser} />
        </ContentLayout>
      </PageLayout>
    </>
  );
};

export default AccountPage;
