import styled from "styled-components";

export const SlidersContainer = styled.div`
  margin-top: 60px;
  margin-bottom: 20px;
`;

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 100px;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 100px;
`;

export const BrandContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`;

export const LineContainer = styled.div`
  width: 1280px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const StyledH2 = styled.h2`
  font-size: 32px;
  font-weight: normal;
  padding-bottom: 20px;
  margin: 0 auto;
`;

export const AdContainer = styled.div`
  width: 1280px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 150px;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  &::before {
    position: absolute;
    top: 0;
    left: -75%;
    z-index: 2;
    display: block;
    content: "";
    width: 50%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 0.8) 100%
    );
    transform: skewX(-45deg);
    opacity: 1;
    transition: opacity 2s, left 2s;
  }

  &:hover::before {
    opacity: 0;
    left: 125%;
  }

  @keyframes shine {
    0% {
      opacity: 1;
    }
    40% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const AdStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ThemaContainer = styled.div`
  margin-bottom: 100px;
`;

export const CategoryTitle = styled.h2`
  position: relative;
  font-size: 32px;
  font-weight: normal;
  width: 1220px;
  margin-right: 40px;
  letter-spacing: 50px;
  font-style: italic;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  padding-bottom: 20px;
  margin-bottom: 5rem;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: calc(100% + 50px);
    height: 3px;
    background: linear-gradient(to right, #4169e1, #feb47b);
  }
`;
