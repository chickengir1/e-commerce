import React from "react";
import OrderItem from "./OrderItem";

const OrderList = ({ orders }) => {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", gap: "16px", width: "100%" }}
    >
      {orders.map((order, index) => (
        <OrderItem key={`${order.id}-${index}`} order={order} index={index} />
      ))}
    </div>
  );
};

export default OrderList;
