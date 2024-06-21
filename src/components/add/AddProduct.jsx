import React from "react";
import CategorySelector from "./CategorySelector";
import ProductDetails from "./ProductDetails";
import { CategoryLayOut } from "./styles/AddProductLayOut";

const AddProduct = ({ onChange, brands, categories, selectedCategory, setSelectedCategory, selectedBrand, setSelectedBrand }) => (
  <CategoryLayOut>
    <ProductDetails onChange={onChange} />
    <CategorySelector
      brands={brands}
      categories={categories}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      selectedBrand={selectedBrand}
      setSelectedBrand={setSelectedBrand}
    />
  </CategoryLayOut>
);

export default AddProduct;
