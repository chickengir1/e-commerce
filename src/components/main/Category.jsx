import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, ImgBtn } from "./styled/mainCategory";
import useFetchData from "../../hook/useFetchData";
import API_PATHS from "../../utils/apiPaths";

function Category() {
  const {
    data: categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useFetchData(API_PATHS.CATEGORIES);

  if (categoriesLoading) {
    return <div>Loading...</div>;
  }

  if (categoriesError) {
    return <div>Error: {categoriesError.message}</div>;
  }

  const images = [
    "/assets/men-top.webp",
    "/assets/men-pants.webp",
    "/assets/women-top.webp",
    "/assets/women-pants.webp",
    "/assets/outer.webp",
    "/assets/bag.webp",
    "/assets/hat.webp",
    "/assets/shoes.webp",
  ];

  const ImageBtn = ({ imgSrc, category }) => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate(`/products/${category.name}`, {
        state: { selectedCategory: category._id },
      });
    };

    return (
      <ImgBtn onClick={handleClick}>
        <img src={imgSrc} alt={category.name} />
        <button style={{ fontSize: "18px", fontWeight: "bold" }}>
          {category.name}
        </button>
      </ImgBtn>
    );
  };

  return (
    <div>
      <Container>
        {categories.map((category, index) => (
          <ImageBtn
            key={category._id}
            imgSrc={images[index % images.length]}
            category={category}
          />
        ))}
      </Container>
    </div>
  );
}

export default Category;
