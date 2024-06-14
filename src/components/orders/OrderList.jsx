import React from "react";
import OrderItem from "./OrderItem";

const OrderList = ({ orders, onDelete }) => (
  <>
    {orders.map((order) => (
      <OrderItem key={order.order_id} order={order} onDelete={onDelete} />
    ))}
  </>
);

export default OrderList;
