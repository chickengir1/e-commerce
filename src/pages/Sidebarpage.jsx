//사이드바 테스트용입니다.
import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import {  SidebarLayout } from '../GlobalStyles/LayoutStyles';

const CartPage = () => {
  
  return (
      <SidebarLayout>
        <Sidebar  />
      </SidebarLayout>
  );
};

export default CartPage;
