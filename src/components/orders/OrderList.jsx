import React from "react";
import OrderItem from "./OrderItem";

const OrderList = ({ orders, onDelete }) => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
    {orders.map((order) => (
      <OrderItem key={order.order_id} order={order} onDelete={onDelete} />
    ))}
  </div>
);

export default OrderList;
