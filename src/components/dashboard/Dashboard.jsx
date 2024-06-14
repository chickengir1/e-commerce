import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PriceData from "./PriceData";
import Notification from "../notification/Notification";
import ProductList from "./ProductList";
import { Container } from "./styles/GlobalLayout";
import { HeaderContainer } from "./styles/BoardLayout";
import { ProductInput, ProductButton } from "./styles/ProductLayout";
import { CommonTitle } from "./styles/FontStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Dashboard = ({ data, total }) => {
  const navigate = useNavigate();
  const [productList, setProductList] = useState(data.productList);
  const [notification, setNotification] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/product/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setProductList(productList.filter(product => product._id !== id));
        setNotification("제품이 성공적으로 삭제되었습니다.");
        setTimeout(() => setNotification(""), 2000);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const filteredProductList = productList.filter((product) => {
    const query = searchQuery.toLowerCase();
    return (
      product.name.toLowerCase().includes(query) ||
      product.brand.name.toLowerCase().includes(query) ||
      product.category.name.toLowerCase().includes(query)
    );
  });

  return (
    <>
      {notification && <Notification message={notification} />}
      <Container>
        <HeaderContainer>
          <CommonTitle>대시보드</CommonTitle>
          <div style={{ position: "relative", width: "350px" }}>
            <FontAwesomeIcon
              icon={faSearch}
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#aaa",
              }}
            />
            <ProductInput
              placeholder="제품 검색..."
              style={{ paddingLeft: "40px" }}
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </HeaderContainer>
        <PriceData priceData={total.priceData} />
        <HeaderContainer>
          <CommonTitle>제품 목록</CommonTitle>
          <div style={{ position: "relative", width: "300px" }}>
            <ProductButton onClick={() => navigate("/add")}>제품 추가하기</ProductButton>
          </div>
        </HeaderContainer>
        <ProductList productList={filteredProductList} onDelete={handleDelete} />
      </Container>
    </>
  );
};

export default Dashboard;
