import { useState } from 'react';
import API_PATHS from '../utils/apiPaths';

const useProductForm = () => {
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    description: '',
    longdescription: '',
    images: [],
    brand: '',
    category: ''
  });

  const handleProductChange = (field, value) => {
    setProductData(prevData => ({ ...prevData, [field]: value }));
  };

  const handleAddProduct = async (selectedCategory, selectedBrand) => {
    try {
      const response = await fetch(API_PATHS.ADMIN_PRODUCTS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...productData, category: selectedCategory, brand: selectedBrand }),
      });

      if (!response.ok) {
        throw new Error('Failed to add product');
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return {
    handleProductChange,
    handleAddProduct,
    productData,
  };
};

export default useProductForm;
