import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 1280px;
  margin: 0 auto;
  justify-content: center;
`;

const Item = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Img = styled.img`
  width: 180px;
  height: 200px;
  object-fit: cover;
`;

const Name = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const Category = styled.p`
  font-size: 14px;
  color: #666;
`;

export { Container, Item, Img, Name, Category }