import React from 'react';
import CheckoutTemplate from "../components/checkout/CheckoutTemplate";

const getProductFromLocalStorage = () => {
  const product = JSON.parse(localStorage.getItem('product'));
  return product ? [product] : [];
};

const CheckoutPage = () => {
  const items = getProductFromLocalStorage();
  const total = items.reduce((acc, item) => acc + item.totalPrice, 0);

  return (
    <div>
      <CheckoutTemplate items={items} total={total} />
    </div>
  );
};

export default CheckoutPage;
