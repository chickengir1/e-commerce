import React from "react";
import CategorySelector from "./CategorySelector";
import ProductDetails from "./ProductDetails";
import { CategoryLayOut } from "./styles/AddProductLayOut";

const AddProduct = ({ onChange, brands, categories, setSelectedCategory, setSelectedBrand }) => (
  <CategoryLayOut>
    <ProductDetails onChange={onChange} />
    <CategorySelector
      brands={brands}
      categories={categories}
      setSelectedCategory={setSelectedCategory}
      setSelectedBrand={setSelectedBrand}
    />
  </CategoryLayOut>
);

export default AddProduct;
