import { useState } from "react";
import API_PATHS from "../utils/apiPaths";

const useOrder = (items) => {
  const [formData, setFormData] = useState({
    name: "",
    address1: "",
    address2: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitOrder = async () => {
    const orderItems = items.map((item) => ({
      productId: item.id,
      size: item.size,
      color: item.color,
      quantity: item.quantity,
    }));

    const orderData = {
      items: orderItems,
      name: formData.name,
      address: {
        postalCode: formData.postalCode,
        address1: formData.address1 || "",
        address2: formData.address2 || "",
      },
    };

    console.log("Sending order data:", orderData);

    const response = await fetch(API_PATHS.ORDER, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();
    return responseData;
  };

  return {
    formData,
    handleChange,
    submitOrder,
  };
};

export default useOrder;
