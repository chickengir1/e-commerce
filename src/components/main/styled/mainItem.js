import styled from "styled-components";

export const Container = styled.div`
  width: 1280px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  height: 50px;
  margin-bottom: 40px;
`;

export const Brand = styled.div`
  margin-bottom: 20px;
  display: flex;
  height: 500px;
`;

export const BrandImage = styled.img`
  width: 50%;
  max-width: 50%;
  min-width: 50%;
  height: 100%;
  object-fit: cover;
  filter: drop-shadow(4px 4px 10px #a9d0f5);
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Products = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 100%;
  justify-content: center;
  gap: 15px;
`;

export const ProductBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 1px 1px 8px #aaa;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;
  &:hover {
    transform: translate(-6px, -6px) rotate(-1deg);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  border-bottom: 3px solid #ddd;
  border-radius: 10px;
  object-fit: cover;
  margin-bottom: 5px;
`;

export const ProductName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 4px;
  border-bottom: 3px solid #ddd;
  border-left: 3px solid #ddd;
  border-right: 3px solid #ddd;
`;

export const ProductNameSmall = styled(ProductName)`
  font-size: 14px;
  margin-bottom: 4px;
  opacity: 0.7;
`;

export const ProductNameMedium = styled(ProductName)`
  font-size: 16px;
`;

export const StyledButton = styled.button`
  flex: 1;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  font-size: 15px;
  text-align: center;
  background-color: #e6e6e6;
  border-radius: 5px;
  cursor: pointer;
  color: #0c0e46;
  font-family: var(--font-nanumfont);
  position: relative;
  line-height: 50px;
  border: none;
  padding: 0;
  overflow: hidden;
  transition: background-color 0.3s ease, transform 0.3s ease;

  span {
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease;
  }

  p {
    margin: 0;
    width: 100%;
    height: 45px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }

  &:not(.selected):before,
  &:not(.selected):after {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    background: #000;
    transition: all 0.3s ease;
  }

  &:not(.selected):before {
    height: 0%;
    width: 2px;
  }

  &:not(.selected):after {
    width: 0%;
    height: 2px;
  }

  &:not(.selected):hover:before {
    height: 100%;
  }

  &:not(.selected):hover:after {
    width: 100%;
  }

  span:before,
  span:after {
    position: absolute;
    content: "";
    right: 0;
    bottom: 0;
    background: #000;
    transition: all 0.3s ease;
  }

  span:before {
    width: 2px;
    height: 0%;
  }

  span:after {
    width: 0%;
    height: 2px;
  }

  &:not(.selected):hover span:before {
    height: 100%;
  }

  &:not(.selected):hover span:after {
    width: 100%;
  }

  &.selected span {
    transform: scale(1.1);
    background: #e0ecf8;
  }

  &:hover {
    transform: translateY(-3px);
  }
`;
