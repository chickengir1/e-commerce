import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ProductList from '../components/product/ProductList';
import Sidebar from '../components/sidebar/Sidebar';
import { PageLayout, SidebarLayout, ContentLayout } from '../GlobalStyles/LayoutStyles';
import NavBar from '../components/nav/nav';
import useFetchData from '../hook/useFetchData';
import background from "../../public/assets/product.png";

const BackgroundWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 5rem;
  left: 10rem;
  width: 80%;
  height: 100%;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  z-index: -1;
  opacity: 0.1;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const filterCategory = (data, categoryName) => {
  if (!data ?? !categoryName) return data;
  return data.filter(product => product.category?.name === categoryName);
};

const ProductPage = () => {
  const { categoryName } = useParams();
  const { data, loading, error } = useFetchData("/api/product");
  console.log(data)
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data) {
      setFilteredData(filterCategory(data, categoryName));
    }
  }, [data, categoryName]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ContentWrapper>
      <NavBar />
      <PageLayout>
        <SidebarLayout>
          <Sidebar />
        </SidebarLayout>
        <ContentLayout>
          <BackgroundWrapper>
            <BackgroundImage />
            <ProductList products={data} filteredData={filteredData} />
             {/* 오피스 아워 시간에 product안뜬 원인 data 필터링 해서 보내줘서 그럼 페이크 페이지를 구성해야 하는데 생각이 짧았어서 문제가 생김*/}
             {/* 임시 방편으로 필터링 된 데이터만 전달해주는 동일한 컴포넌트 작성하거나 아예 배제해야할 듯 함*/}
          </BackgroundWrapper>
        </ContentLayout>
      </PageLayout>
    </ContentWrapper>
  );
};

export default ProductPage;
