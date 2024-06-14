import React from "react";
import {
  OrderDate,
  OrderStatus,
  OrderProduct,
  OrderPrice,
  OrderActionsButton,
} from "./styles/OrderItemStyles";

import {
  OrderContainer,
  OrderContent,
  OrderLeftSection,
  OrderRightSection,
  ProductImage,
  ProductDetails,
  OrderActions,
} from "./styles/PageStyles";

const OrderItem = ({ order }) => {
  const { order_date, status, product, order_id } = order;
  const { name: productName, variants } = product;
  const { price, images, color, size, stock } = variants[0];

  const totalPrice = price * stock;

  return (
    <OrderContainer>
      <OrderContent>
        <OrderLeftSection>
          <OrderDate>{order_date}</OrderDate>
          <OrderStatus>{status}</OrderStatus>
          <ProductDetails>
            <ProductImage src={images[0]} alt={productName} />
            <div>
              <OrderProduct>{`${productName} - ${color} / ${size}`}</OrderProduct>
              <div style={{display : "flex"}}>
              <OrderPrice>{`${price.toLocaleString("ko-KR")} 원 -`}</OrderPrice>
              <OrderPrice>{`총 금액 : ${totalPrice.toLocaleString("ko-KR")} 원`}</OrderPrice>
              </div>
            </div>
          </ProductDetails>
        </OrderLeftSection>
        <OrderRightSection>
          <OrderActions>
            <OrderPrice>{`ID - #${order_id}`}</OrderPrice>
            <div style={{display : "flex", gap : "5px"}}>
            <OrderActionsButton>주문 취소</OrderActionsButton>
            <OrderActionsButton>주문 수정</OrderActionsButton>
            </div>
          </OrderActions>
        </OrderRightSection>
      </OrderContent>
    </OrderContainer>
  );
};

export default OrderItem;
