import React, { useState } from "react";
import Modal from "react-modal";
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

import OrderEdit from "./OrderEdit";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    height: '370px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    border: 'none'
  },
};

const OrderItem = ({ order }) => {
  const { order_date, status, product, order_id } = order;
  const { name: productName, variants } = product;
  const { price, images, color, size, stock } = variants[0];

  const totalPrice = price * stock;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
              <div style={{ display: "flex" }}>
                <OrderPrice>{`${price.toLocaleString("ko-KR")} 원 -`}</OrderPrice>
                <OrderPrice>{`총 금액 : ${totalPrice.toLocaleString("ko-KR")} 원`}</OrderPrice>
              </div>
            </div>
          </ProductDetails>
        </OrderLeftSection>
        <OrderRightSection>
          <OrderActions>
            <OrderPrice>{`ID - #${order_id}`}</OrderPrice>
            <div style={{ display: "flex", gap: "5px" }}>
              <OrderActionsButton>주문 취소</OrderActionsButton>
              <OrderActionsButton onClick={openModal}>주문 수정</OrderActionsButton>
            </div>
          </OrderActions>
        </OrderRightSection>
      </OrderContent>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Order Edit Modal"
        ariaHideApp={false}
        style={customStyles}
      >
        <OrderEdit order={order} closeModal={closeModal} />
      </Modal>
    </OrderContainer>
  );
};

export default OrderItem;
