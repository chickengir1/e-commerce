import React from "react";
import { OrderDate, OrderStatus } from "./styles/OrderItemStyles";

const OrderInfo = ({ order_date, status }) => (
  <>
    <OrderDate>{order_date}</OrderDate>
    <OrderStatus>{status}</OrderStatus>
  </>
);

export default OrderInfo;
