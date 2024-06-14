import styled from "styled-components";

export const RelatedProductsStyled = styled.div`
  margin-top: 2rem;
  h3 {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 2rem;
  }
  ul {
    list-style: none;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const RelatedProductItem = styled.li`
  flex: 1 1 calc(34% - 20px);
  max-width: calc(34% - 20px);
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fff;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.01);
  }

  a {
    text-decoration: none;

    img {
      width: 100%;
      height: 150px;
      object-fit: cover;
      border-radius: 8px;
      border: 2px solid #e0e0e0;
    }

    p {
      margin-top: 10px;
      font-size: 14px;
      color: #333;
    }
  }
`;

export const CommonTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 10px;
`;
