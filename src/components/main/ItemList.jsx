import React, { useState, useEffect } from "react";
import Nike from "../../../public/assets/nike.webp";
import Adidas from "../../../public/assets/adidas.webp";
import Puma from "../../../public/assets/puma.webp";
import {
  Container,
  ButtonContainer,
  StyledButton,
  Brand,
  ProductContainer,
  Products,
  ProductBox,
  ProductImage,
  ProductName,
  ProductNameMedium,
  ProductNameSmall,
  BrandImage,
} from "./styled/mainItem";
import useFetchData from "../../hook/useFetchData";

const BrandItemList = () => {
  const {
    data: brandData,
    loading: brandLoading,
    error: brandError,
  } = useFetchData(`/api/brand`);
  const {
    data: productData,
    loading: productLoading,
    error: productError,
  } = useFetchData(`/api/product`);
  const [selectedBrandName, setSelectedBrandName] = useState("");

  useEffect(() => {
    if (brandData && brandData.length > 0) {
      setSelectedBrandName(brandData[0].name);
    }
  }, [brandData]);

  if (brandLoading || productLoading) return <div>Loading...</div>;
  if (brandError) return <div>Error: {brandError.message}</div>;
  if (productError) return <div>Error: {productError.message}</div>;

  const brand = brandData.find((brand) => brand.name === selectedBrandName);

  const firstBox = productData
    .filter((product) => product.brand && product.brand._id === brand._id)
    .slice(0, 2);

  const secondBox = productData
    .filter((product) => product.brand && product.brand._id === brand._id)
    .slice(2, 4);

  const handleBrandSelect = (brandName) => {
    setSelectedBrandName(brandName);
  };

  const getBrandImage = (brandName) => {
    switch (brandName) {
      case "나이키":
        return Nike;
      case "아디다스":
        return Adidas;
      case "푸마":
        return Puma;
      default:
        return null;
    }
  };

  return (
    <Container>
      <ButtonContainer>
        {brandData.map((brand) => (
          <StyledButton
            key={brand._id}
            className={selectedBrandName === brand.name ? "selected" : ""}
            onClick={() => handleBrandSelect(brand.name)}
          >
            <span>
              <p>{brand.name}</p>
            </span>
          </StyledButton>
        ))}
      </ButtonContainer>
      <Brand>
        <BrandImage src={getBrandImage(selectedBrandName)} alt="Brand" />
        <ProductContainer>
          <Products>
            {firstBox.map((product) => (
              <ProductBox key={product._id}>
                <ProductImage
                  src={
                    product.images && product.images[0]
                      ? product.images[0]
                      : "https://via.placeholder.com/150"
                  }
                  alt={product.name}
                />
                <ProductName>{product.name}</ProductName>
                <ProductNameSmall>{product.description}</ProductNameSmall>
                <ProductNameMedium>{`${product.price.toLocaleString(
                  "ko-KR"
                )} 원`}</ProductNameMedium>
              </ProductBox>
            ))}
          </Products>
        </ProductContainer>
        <ProductContainer>
          <Products>
            {secondBox.map((product) => (
              <ProductBox key={product._id}>
                <ProductImage
                  src={
                    product.images && product.images[0]
                      ? product.images[0]
                      : "https://via.placeholder.com/150"
                  }
                  alt={product.name}
                />
                <ProductName>{product.name}</ProductName>
                <ProductNameSmall>{product.description}</ProductNameSmall>
                <ProductNameMedium>{`${product.price.toLocaleString(
                  "ko-KR"
                )} 원`}</ProductNameMedium>
              </ProductBox>
            ))}
          </Products>
        </ProductContainer>
      </Brand>
    </Container>
  );
};

export default BrandItemList;
