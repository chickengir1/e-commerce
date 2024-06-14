import React from 'react';
import { useNavigate } from 'react-router-dom';
import Category from './Category';
import Sliders from './mainSlider';
import Brand from './Brand';
import ItemList from './ItemList';
import ThemaItem from './ThemaItem';
import { Line } from '../../GlobalStyles/LayoutStyles';
import logo from '../../../public/assets/logo.png';
import {
  SlidersContainer,
  CategoryContainer,
  ItemContainer,
  BrandContainer,
  LineContainer,
  StyledH2,
  AdStyled,
  AdContainer,
  ThemaContainer,
  CategoryTitle
} from './styled/main';



const Mainpage = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/products`);
};


  return (
    <>
      <SlidersContainer>
        <Sliders />
      </SlidersContainer>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <AdContainer>
      <AdStyled src={logo} onClick={handleClick} />
      </AdContainer>
      <CategoryTitle>CATEGORY</CategoryTitle>
      </div>
      <CategoryContainer>
        <Category />
      </CategoryContainer>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <CategoryTitle>여름의 신선함을 만나보세요</CategoryTitle>
      <ItemContainer>
        <ItemList />
      </ItemContainer>
      </div>
      <LineContainer>
        <Line />
      </LineContainer>
      <StyledH2>모아둔 이유</StyledH2>
      <ThemaContainer>
        <ThemaItem />
        <br />
        <ThemaItem />
      </ThemaContainer>
      <StyledH2>브랜드 갤러리</StyledH2>
      <BrandContainer>
        <Brand />
      </BrandContainer>
    </>
  );
};

export default Mainpage;
