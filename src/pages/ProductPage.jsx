import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import ProductList from '../components/product/ProductList';
import Sidebar from '../components/sidebar/Sidebar';
import { PageLayout, SidebarLayout, ContentLayout } from '../GlobalStyles/LayoutStyles';
import NavBar from '../components/nav/nav';
import useFetchData from '../hook/useFetchData';
import background from "../../public/assets/product.png";
import FilterButtons from '../components/product/FilterButtons';
import BackgroundWrapper from '../components/product/styles/BackgroundWrapper';
import { ContentWrapper } from '../components/product/styles/ContentWrapper';

const ProductPage = () => {
  const location = useLocation();
  const { state } = location;
  const { filteredProducts: initialFilteredProducts } = state || { filteredProducts: null };

  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const searchInputRef = useRef('');

  const fetchUrl = '/api/product';
  const brandUrl = '/api/brand';
  const categoryUrl = '/api/category';
  const { data: products, loading: productsLoading, error: productsError } = useFetchData(fetchUrl);
  const { data: brands, loading: brandsLoading, error: brandsError } = useFetchData(brandUrl);
  const { data: categories, loading: categoriesLoading, error: categoriesError } = useFetchData(categoryUrl);

  if (productsLoading || brandsLoading || categoriesLoading) return <div>Loading...</div>;
  if (productsError || brandsError || categoriesError) return <div>Error loading data</div>;

  const handleFilter = (type) => {
    setFilterType(type);
    if (type === 'brand') {
      setSelectedBrand(brands.length > 0 ? brands[0]._id : null);
      setSelectedCategory(null);
    } else if (type === 'category') {
      setSelectedCategory(categories.length > 0 ? categories[0]._id : null);
      setSelectedBrand(null);
    } else {
      setSelectedBrand(null);
      setSelectedCategory(null);
    }
  };

  const filteredProducts = initialFilteredProducts || filterProducts(products, filterType, selectedBrand, selectedCategory);

  const searchedProducts = searchProducts(filteredProducts, searchQuery);

  return (
    <ContentWrapper>
      <NavBar setSearchQuery={setSearchQuery} searchInputRef={searchInputRef} />
      <PageLayout>
        <SidebarLayout>
          <Sidebar />
        </SidebarLayout>
        <ContentLayout>
          {!initialFilteredProducts && (
            <FilterButtons 
              filterType={filterType}
              brands={brands}
              categories={categories}
              handleFilter={handleFilter}
              setSelectedBrand={setSelectedBrand}
              setSelectedCategory={setSelectedCategory}
              selectedBrand={selectedBrand}
              selectedCategory={selectedCategory}
            />
          )}
          <BackgroundWrapper>
            <BackgroundImage />
            <ProductList products={searchedProducts} searchQuery={searchQuery} />
          </BackgroundWrapper>
        </ContentLayout>
      </PageLayout>
    </ContentWrapper>
  );
};

const filterProducts = (products, filterType, selectedBrand, selectedCategory) => {
  return products.filter(product => {
    if (filterType === 'brand' && selectedBrand) {
      return product.brand && product.brand._id === selectedBrand;
    } else if (filterType === 'category' && selectedCategory) {
      return product.category && product.category._id === selectedCategory;
    } else {
      return true;
    }
  });
};

const searchProducts = (products, searchQuery) => {
  return products.filter(product =>
    product.name && product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

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

export default ProductPage;
