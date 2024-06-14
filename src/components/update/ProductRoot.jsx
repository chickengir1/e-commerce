import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UpdateProduct from "./UpdateProduct";
import { ButtonStyled, TitleStyled } from "./styles/Content";
import { UpdateProductLayOut } from "./styles/UpdateProductLayOut";
import useUpdateProductForm from "../../hook/useUpdateProductForm";
import Notification from "../notification/Notification";
import useFetchOptions from "../../hook/useFetchOptions";

const ProductRoot = () => {
  const { id } = useParams();
  const apiUrl = "/api/product";
  const brandUrl = "/api/brand";
  const categoryUrl = "/api/category";
  const navigate = useNavigate();

  const { productData, fetchLoading, fetchError, setProductData, handleUpdateProduct } = useUpdateProductForm(apiUrl, id);
  const { brands, categories, loading, error } = useFetchOptions(brandUrl, categoryUrl);

  const [notification, setNotification] = useState("");

  if (fetchLoading || loading) {
    return <div>Loading...</div>;
  }

  if (fetchError || error) {
    return <div>Error: {fetchError ? fetchError.message : error.message}</div>;
  }

  const handleProductChange = (key, value) => {
    setProductData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    try {
      await handleUpdateProduct(productData);

      const response = await fetch(`${apiUrl}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          brand: productData.brand,
          category: productData.category,
        }),
      });

      if (!response.ok) {
        throw new Error("카테고리 업데이트에 실패했습니다.");
      }

      const updatedProduct = await response.json();
      setProductData(updatedProduct);

      setNotification("제품 수정이 완료 되었습니다!");
      setTimeout(() => setNotification(""), 1000);
      setTimeout(() => navigate(-1), 1500);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "50px", width: "100%", height: "auto", marginBottom: "5rem" }}>
      {notification && <Notification message={notification} />}
      <div style={{ display: "flex", width: "50%", margin: "0 auto" }}>
        <TitleStyled>제품 정보 수정</TitleStyled>
      </div>
      <UpdateProductLayOut>
        <UpdateProduct data={productData} onChange={handleProductChange} brands={brands} categories={categories} />
      </UpdateProductLayOut>
      <div style={{ display: "flex", width: "50%", margin: "0 auto", marginTop: "15px", justifyContent: "end" }}>
        <ButtonStyled onClick={handleSave}>업데이트</ButtonStyled>
      </div>
    </div>
  );
};

export default ProductRoot;
