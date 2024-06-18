import React from "react";
import { Container, SliderWrapper, Item, Img, Name, Price, slide } from "./styled/mainThema";
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
      {/* ItemCount 앞에 $접두사를 붙이면 props가 필터링 되어 스타일 컴포넌트에 안전하게 전달 할 수 있다 */}
      {/* 이와 같은 방법을 사용하면 prop이 DOM요소로 전달되지 않고 슬라이드 애니메이션이 정상적으로 작동한다 */}
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
