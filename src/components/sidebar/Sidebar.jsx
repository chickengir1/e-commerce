import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarContainer, MenuContainer } from "./styles/SidebarStyles";
import UserInfo from "./UserInfo";
import MenuItem from "./MenuItem";
import useUserInfo from '../../hook/useUserInfo';

const Sidebar = () => {
  const { user, loading, error } = useUserInfo();
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.role === 'admin') {
      setIsAdmin(true);
    }
  }, [user]);

  const menuItems = [
    { icon: "order", text: "주문 내역", path: "/orders" },
    { icon: "wishlist", text: "장바구니", path: "/carts" },
    { icon: "settings", text: "계정 설정", path: "/account" },
    { icon: "payment", text: "결제 정보", path: "/card" },
    { icon: "delivery", text: "주소 정보", path: "아직 안 만듦" },
    { icon: "support", text: "고객센터", path: "/support" },
  ];

  if (isAdmin) {
    menuItems.push({ icon: "dashboard", text: "대시보드", path: "/dashboard" });
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <SidebarContainer>
      <UserInfo user={user} />
      <MenuContainer>
        {menuItems.map((item) => (
          <MenuItem
            key={item.text}
            icon={item.icon}
            text={item.text}
            onClick={() => navigate(item.path)}
          />
        ))}
      </MenuContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
