import React from "react";
import { Container, SliderWrapper, Item, Img, Name, Price } from "./styled/mainThema";
import { useNavigate } from "react-router-dom";
import useFetchData from "../../hook/useFetchData";
import API_PATHS from "../../utils/apiPaths";

const ThemaItem = () => {
  const { data, loading, error } = useFetchData(API_PATHS.PRODUCTS);
  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const items = data ? [...data] : [];

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <Container>
      <SliderWrapper $itemCount={items.length}>
        {items.map((item, index) => (
          <Item key={item._id ?? index} onClick={() => handleClick(item._id)}>
            <Price>{index + 1}</Price>
            <Img
              src={item.images[0] ?? `https://via.placeholder.com/150?text=No+Image`}
              alt={item.name ?? `Item ${index + 1}`}
            />
            <Name>{item.name ?? `Name ${index + 1}`}</Name>
            <Price>{`${item.price.toLocaleString()}원`}</Price>
          </Item>
        ))}
      </SliderWrapper>
    </Container>
  );
};

export default ThemaItem;
