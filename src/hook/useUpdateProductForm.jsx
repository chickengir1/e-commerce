import { useState, useEffect } from 'react';
import API_PATHS from '../utils/apiPaths';

const useProductUpdateForm = (productId) => {
  const [productData, setProductData] = useState(null);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [updateError, setUpdateError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${API_PATHS.PRODUCTS}/${productId}`);
        if (!response.ok) throw new Error('Failed to fetch product');
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setFetchLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleProductChange = (field, value) => {
    setProductData(prevData => ({ ...prevData, [field]: value }));
  };

  const handleUpdateProduct = async () => {
    if (!productData.images || productData.images.length === 0) {
      setUpdateError('이미지를 추가해주세요!');
      return;
    }
    try {
      const response = await fetch(`${API_PATHS.PRODUCTS}/${productId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData),
      });
      if (!response.ok) throw new Error('Failed to update product');
    } catch (error) {
      setUpdateError(error.message);
    }
  };

  return {
    productData,
    fetchLoading,
    fetchError,
    setProductData,
    handleProductChange,
    handleUpdateProduct,
    updateError,
  };
};

export default useProductUpdateForm;
