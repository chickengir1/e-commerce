import React from 'react';
import { useNavigate } from 'react-router-dom';
import Category from './Category';
import Sliders from './mainSlider';
import Puzzle from './mainPuzzle';
import ItemList from './ItemList';
import ThemaItem from './ThemaItem';
import logo from '../../../public/assets/logo.png';
import {
  SlidersContainer,
  CategoryContainer,
  ItemContainer,
  StyledH2,
  AdStyled,
  AdContainer,
  ThemaContainer,
  CategoryTitle,
  Container
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
        <CategoryTitle>CATEGORY</CategoryTitle>
      </div>
      <CategoryContainer>
        <Category />
      </CategoryContainer>
      <AdContainer>
        <AdStyled src={logo} onClick={handleClick} />
      </AdContainer>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <CategoryTitle>여름의 신선함을 만나보세요</CategoryTitle>
        <ItemContainer>
          <ItemList />
        </ItemContainer>
      </div>  
      <Container>
        <Puzzle />
      </Container>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <CategoryTitle>엘리스 스토어</CategoryTitle>
      <ThemaContainer>
        <ThemaItem />
      </ThemaContainer>
      </div>  
    </>
  );
};

export default Mainpage;
