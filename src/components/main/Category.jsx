import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, ImgBtn } from './styled/mainCategory';
import useFetchData from '../../hook/useFetchData';
import API_PATHS from "../../utils/apiPaths";

function Category() {
  const { data: categories, loading: categoriesLoading, error: categoriesError } = useFetchData(API_PATHS.CATEGORIES);
  const { data: products, loading: productsLoading, error: productsError } = useFetchData(API_PATHS.PRODUCTS);

  if (categoriesLoading || productsLoading) {
    return <div>Loading...</div>;
  }

  if (categoriesError) {
    return <div>Error: {categoriesError.message}</div>;
  }

  if (productsError) {
    return <div>Error: {productsError.message}</div>;
  }

  const images = [
    "/assets/men-top.webp",
    "/assets/men-pants.webp",
    "/assets/women-top.webp",
    "/assets/women-pants.webp",
  ];

  const ImageBtn = ({ imgSrc, category }) => {
    const navigate = useNavigate();

    const handleClick = () => {
      const filteredProducts = products.filter(
        (product) => product.category && product.category._id && product.category._id.toString() === category._id.toString()
      );
      console.log(`Category: ${category.name}`);
      console.log(`Category ID: ${category._id}`);
      console.log(filteredProducts);
      navigate(`/products/${category.name}`, { state: { filteredProducts } });
    };

    return (
      <ImgBtn onClick={handleClick}>
        <img src={imgSrc} alt={category.name} />
        <button style={{ fontSize: "24px", fontWeight: "bold" }}>{category.name}</button>
      </ImgBtn>
    );
  };

  return (
    <div>
      <Container>
        {categories.map((category, index) => (
          <ImageBtn key={category._id} imgSrc={images[index % images.length]} category={category} />
        ))}
      </Container>
    </div>
  );
}

export default Category;
