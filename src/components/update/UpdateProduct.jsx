import React from "react";
import ProductDetails from "./ProductDetails";
import CategoryDetails from "./CategoryDetails";
import { CategoryLayOut } from "./styles/UpdateProductLayOut";

const UpdateProduct = ({ data, onChange, brands, categories }) => (
  <CategoryLayOut>
    <ProductDetails data={data} onChange={onChange} />
    <CategoryDetails brands={brands} categories={categories} onChange={onChange} />
  </CategoryLayOut>
);

export default UpdateProduct;
