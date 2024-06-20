import React, { useState } from "react";
import {
  OrderContainer,
  OrderContent,
  OrderLeftSection,
  OrderRightSection,
  ProductDetails,
  OrderActions,
} from "./styles/PageStyles";
import { ProductImage } from "./styles/PageStyles";
import { OrderPrice, OrderProduct } from "./styles/OrderItemStyles";
import OrderInfo from "./OrderInfo";
import OrderButtonsWithModal from "./OrderButtonsWithModal";

const OrderItem = ({ order, index }) => {
  const {
    order_date,
    status,
    size,
    color,
    productName,
    productImage,
    productPrice,
    quantity,
  } = order;

  const totalPrice = productPrice * quantity;

  return (
    <OrderContainer>
      <OrderContent>
        <OrderLeftSection>
          <OrderInfo order_date={order_date} status={status} />
          <ProductDetails>
            <ProductImage
              src={productImage}
              alt={productName}
              style={{ width: "150px" }}
            />
            <div>
              <OrderProduct>{productName}</OrderProduct>
              <div style={{ display: "flex" }}>
                <OrderPrice>{`Size: ${size}`}</OrderPrice>
                <OrderPrice>{`색상: ${color}`}</OrderPrice>
              </div>
              <OrderPrice>{`주문 수량 : ${quantity} 개`}</OrderPrice>
              <OrderProduct>{`총 가격 : ${totalPrice.toLocaleString(
                "ko-kr"
              )} 원`}</OrderProduct>
            </div>
          </ProductDetails>
        </OrderLeftSection>
        <OrderRightSection>
          <OrderActions>
            <OrderPrice>{`ID - #${10000 + index}`}</OrderPrice>
            <OrderButtonsWithModal order={order} />
          </OrderActions>
        </OrderRightSection>
      </OrderContent>
    </OrderContainer>
  );
};

export default OrderItem;
