import React from 'react';
import { MenuItemContainer, MenuIcon } from './styles/SidebarStyles';
import Label from './Label';
import { faCartArrowDown, faHeart, faCog, faCreditCard, faMapMarkerAlt, faHeadset, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  order: faCartArrowDown,
  wishlist: faHeart,
  settings: faCog,
  payment: faCreditCard,
  delivery: faMapMarkerAlt,
  support: faHeadset,
  dashboard: faTachometerAlt,
};

const MenuItem = ({ icon, text, onClick }) => (
  <MenuItemContainer style={{ textAlign: "start" }} onClick={onClick}>
    <MenuIcon icon={iconMap[icon]} />
    <Label size="16px">{text}</Label>
  </MenuItemContainer>
);

export default MenuItem;
