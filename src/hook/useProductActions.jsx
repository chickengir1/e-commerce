import { useState, useEffect } from 'react';
import { deleteProduct } from '../utils/api';

const useProductActions = ({ initialProductList }) => {
  const [productList, setProductList] = useState(initialProductList);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    setProductList(initialProductList);
  }, [initialProductList]);

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProductList(prevList => prevList.filter(product => product._id !== id));
      setNotification('제품이 성공적으로 삭제되었습니다.');
      setTimeout(() => setNotification(''), 2000);
    } catch (error) {
      setNotification(`Error deleting product: ${error.message}`);
      setTimeout(() => setNotification(''), 2000);
    }
  };

  return { productList, notification, handleDelete };
};

export default useProductActions;
