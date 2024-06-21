import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddProduct from "./AddProduct";
import { ButtonStyled, TitleStyled } from "./styles/Content";
import { AddProductLayOut } from "./styles/AddProductLayOut";
import Notification from "../notification/Notification";
import useFetchOptions from "../../hook/useFetchOptions";
import useProductForm from "../../hook/useProductForm";
import API_PATHS from "../../utils/apiPaths";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const AddProductRoot = () => {
  const apiUrl = API_PATHS.ADMIN_PRODUCTS;
  const brandUrl = API_PATHS.BRANDS;
  const categoryUrl = API_PATHS.CATEGORIES;
  const navigate = useNavigate();
  const { handleProductChange, handleAddProduct, productData } = useProductForm(apiUrl);
  const { brands, categories, loading, error } = useFetchOptions(brandUrl, categoryUrl);
  const [notification, setNotification] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleButtonClick = async () => {
    if (!selectedCategory || !selectedBrand || !productData.images || productData.images.length === 0) {
      console.error("Category, Brand, and Images are required.");
      setNotification("필수 항목들을 입력해주세요!");
      await delay(1000);
      setNotification("");
      return;
    }
    handleAddProduct(selectedCategory, selectedBrand);
    setNotification("제품이 성공적으로 등록되었습니다.");
    await delay(1000);
    setNotification("");
    await delay(500);
    navigate(-1);
  };

  const handleFormChange = (field, value) => {
    handleProductChange(field, value);
  };

  return (
    <div style={{ paddingTop: "5rem", height: "100%" }}>
      {notification && <Notification message={notification} />}
      <div style={{ display: "flex", width: "80%", height: "5rem", justifyContent: "space-between", alignItems: "center", margin: "0 auto" }}>
        <TitleStyled>제품 추가</TitleStyled>
      </div>
      <AddProductLayOut>
        <AddProduct
          onChange={handleFormChange}
          brands={brands}
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
        />
        <div style={{ display: "flex", height: "5rem", justifyContent: "end", alignItems: "center", margin: "0 auto" }}>
          <ButtonStyled onClick={handleButtonClick}>저장</ButtonStyled>
        </div>
      </AddProductLayOut>
    </div>
  );
};

export default AddProductRoot;