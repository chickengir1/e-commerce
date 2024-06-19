import React, { useState } from "react";
import Modal from "react-modal";
import {
  OrderDate,
  OrderStatus,
  OrderProduct,
  OrderPrice,
  OrderActionsButton,
} from "./styles/OrderItemStyles";
import { ProductImage } from "./styles/PageStyles";
import {
  OrderContainer,
  OrderContent,
  OrderLeftSection,
  OrderRightSection,
  ProductDetails,
  OrderActions,
} from "./styles/PageStyles";

import OrderEdit from "./OrderEdit";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    height: "370px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    border: "none",
  },
};

const OrderItem = ({ order, index }) => {
  const {
    order_date,
    status,
    size,
    productName,
    productImage,
    productPrice,
    quantity,
  } = order;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
              <OrderPrice>{`Size: ${size}`}</OrderPrice>
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
            <OrderButtons openModal={openModal} order_id={index} />
          </OrderActions>
        </OrderRightSection>
      </OrderContent>
      <OrderEditModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        order={order}
      />
    </OrderContainer>
  );
};

const OrderInfo = ({ order_date, status }) => (
  <>
    <OrderDate>{order_date}</OrderDate>
    <OrderStatus>{status}</OrderStatus>
  </>
);

const OrderButtons = ({ onDelete, openModal }) => (
  <div style={{ display: "flex", gap: "5px" }}>
    <OrderActionsButton onClick={onDelete}>주문 취소</OrderActionsButton>
    <OrderActionsButton onClick={openModal}>주문 수정</OrderActionsButton>
  </div>
);

const OrderEditModal = ({ isOpen, closeModal, order }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    contentLabel="Order Edit Modal"
    ariaHideApp={false}
    style={customStyles}
  >
    <OrderEdit order={order} closeModal={closeModal} />
  </Modal>
);

export default OrderItem;
