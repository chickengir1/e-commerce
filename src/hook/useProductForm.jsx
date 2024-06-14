import { useState } from 'react';

const useProductForm = (apiUrl) => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    images: [],
    longdescription: '',
  });

  const handleProductChange = (field, value) => {
    setProduct((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAddProduct = async (category, brand) => {
    const { name, description, price, images, longdescription } = product;

    const productData = {
      name,
      description,
      price,
      images,
      longdescription,
      category,
      brand,
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to add product');
      }

      console.log('Product added successfully');
    } catch (error) {
      console.error('Failed to add product:', error.message);
    }
  };

  return { handleProductChange, handleAddProduct };
};

export default useProductForm;
