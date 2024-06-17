import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import API_PATHS from "../../utils/apiPaths";

const brandImages = {
  나이키: Nike,
  아디다스: Adidas,
  푸마: Puma,
};

const ItemList = () => {
  const navigate = useNavigate();

  const {
    data: brandData,
    loading: brandLoading,
    error: brandError,
  } = useFetchData(API_PATHS.BRANDS);
  const {
    data: productData,
    loading: productLoading,
    error: productError,
  } = useFetchData(API_PATHS.PRODUCTS);

  const [selectedBrandName, setSelectedBrandName] = useState("");

  useEffect(() => {
    if (brandData && brandData.length > 0) {
      setSelectedBrandName(brandData[0].name);
    }
  }, [brandData]);

  if (brandLoading || productLoading) return <div>Loading...</div>;
  if (brandError) return <div>Error: {brandError.message}</div>;
  if (productError) return <div>Error: {productError.message}</div>;

  const selectedBrand = brandData.find((brand) => brand.name === selectedBrandName);
  const filteredProducts = productData.filter(
    (product) => product.brand && product.brand._id === selectedBrand._id
  );

  const handleBrandSelect = (brandName) => setSelectedBrandName(brandName);

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
        <BrandImage src={brandImages[selectedBrandName]} alt="Brand" />
        <ProductContainer>
          <Products>
            {filteredProducts.slice(0, 4).map((product) => (
              <ProductBox key={product._id} onClick={() => navigate("/products")}>
                <ProductImage
                  src={product.images?.[0] || "https://via.placeholder.com/150"}
                  alt={product.name}
                />
                <ProductName>{product.name}</ProductName>
                <ProductNameSmall>{product.description}</ProductNameSmall>
                <ProductNameMedium>{`${product.price.toLocaleString("ko-KR")} 원`}</ProductNameMedium>
              </ProductBox>
            ))}
          </Products>
        </ProductContainer>
      </Brand>
    </Container>
  );
};

export default ItemList;
