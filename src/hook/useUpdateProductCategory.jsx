import { useState } from 'react';
import API_PATHS from "../utils/apiPaths";

const useUpdateProductCategory = (id) => {
  const [updateError, setUpdateError] = useState(null);

  const updateProductCategory = async (productData) => {
    try {
      const response = await fetch(`${API_PATHS.PRODUCTS}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          brand: productData.brand,
          category: productData.category,
        }),
      });

      if (!response.ok) throw new Error("카테고리 업데이트에 실패했습니다.");

      const updatedProduct = await response.json();
      return updatedProduct;
    } catch (error) {
      setUpdateError(error);
      throw error;
    }
  };

  return { updateProductCategory, updateError };
};

export default useUpdateProductCategory;