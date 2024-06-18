import { useState } from 'react';
import API_PATHS from '../utils/apiPaths';

const useOrder = (items) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    district: '',
    postalCode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const submitOrder = async () => {
    const orderItems = items.map(item => ({
      productId: item.id,
      size: { [item.size]: item.quantity },
      color: item.color
    }));

    const orderData = {
      items: orderItems,
      customer: formData,
    };

    const response = await fetch(API_PATHS.ORDER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    return responseData;
  };

  return {
    formData,
    handleChange,
    submitOrder
  };
};

export default useOrder;
