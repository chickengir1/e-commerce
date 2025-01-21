import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UpdateProduct from "./UpdateProduct";
import Navbar from "../nav/nav"
import { ButtonStyled, TitleStyled } from "./styles/Content";
import { UpdateProductLayOut } from "./styles/UpdateProductLayOut";
import useProductUpdateForm from "../../hook/useUpdateProductForm";
import Notification from "../notification/Notification";
import useFetchOptions from "../../hook/useFetchOptions";
import useUpdateProductCategory from "../../hook/useUpdateProductCategory"
import { PageLayout, SidebarLayout, ContentLayout } from "../../GlobalStyles/LayoutStyles";
import Sidebar from "../sidebar/Sidebar";
import Footer from "../footer/footer";
import API_PATHS from "../../utils/apiPaths";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const UpdateProductRoot = () => {
  const { id } = useParams();
  const brandUrl = API_PATHS.BRANDS;
  const categoryUrl = API_PATHS.CATEGORIES;
  const navigate = useNavigate();

  const { productData, fetchLoading, fetchError, setProductData, handleProductChange, handleUpdateProduct, updateError } = useProductUpdateForm(id);
  const { brands, categories, loading, error } = useFetchOptions(brandUrl, categoryUrl);
  const { updateProductCategory, updateError: categoryUpdateError } = useUpdateProductCategory(id);
  const [notification, setNotification] = useState("");

  const showNotification = async (message, delayTime) => {
    setNotification(message);
    await delay(delayTime);
    setNotification("");
  };

  if (fetchLoading || loading) return <div>Loading...</div>;
  if (fetchError || error) return <div>Error: {fetchError ? fetchError.message : error.message}</div>;

  const handleSave = async () => {
    if (!productData.images || productData.images.length === 0) {
      await showNotification("이미지를 추가해주세요!", 2000);
      return;
    }
    try {
      await handleUpdateProduct();
      const updatedProduct = await updateProductCategory(productData);
      setProductData(updatedProduct);
      await showNotification("제품 수정이 완료 되었습니다!", 1000);
      await delay(500);
      navigate(-1);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <Navbar/>
    <PageLayout>
        <SidebarLayout>
          <Sidebar />
        </SidebarLayout>
    <div style={{ padding: "50px", width: "100%", height: "auto", marginBottom: "5rem" }}>
      {notification && <Notification message={notification} />}
      <ContentLayout>
      <HeaderTitle title="제품 정보 수정" />
      <UpdateProductLayOut>
        <UpdateProduct
          data={productData}
          onChange={handleProductChange}
          brands={brands}
          categories={categories}
        />
      </UpdateProductLayOut>
      <FooterButton onSave={handleSave} />
      </ContentLayout>
    </div>
    </PageLayout>
    <Footer/>
    </>
  );
};

const HeaderTitle = ({ title }) => (
  <div style={{ display: "flex", width: "80%", margin: "0 auto" }}>
    <TitleStyled>{title}</TitleStyled>
  </div>
);

const FooterButton = ({ onSave }) => (
  <div style={{ display: "flex", width: "80%", margin: "0 auto", marginTop: "15px", justifyContent: "end" }}>
    <ButtonStyled onClick={onSave}>업데이트</ButtonStyled>
  </div>
);

export default UpdateProductRoot;