import React from 'react';
import { Flex, Items } from './styles/LayoutStyles';
import ProductCard from './ProductCard';

const addPlaceholders = (products, itemsPerRow) => {
  const placeholdersNeeded = itemsPerRow - (products.length % itemsPerRow);
  if (placeholdersNeeded < itemsPerRow) {
    return [
      ...products, 
      ...Array.from({ length: placeholdersNeeded }, (_, i) => ({ id: `placeholder-${i}`, placeholder: true }))
    ];
  }
  return products;
};

const ProductList = ({ products }) => {
  const productItems = addPlaceholders(products, 4);

  return (
    <Flex>
      {productItems.map((product, index) => (
        <Items
          key={product.placeholder ? `placeholder-${index}` : product._id}
        >
          {!product.placeholder && <ProductCard product={product} />}
        </Items>
      ))}
    </Flex>
  );
};

export default ProductList;
