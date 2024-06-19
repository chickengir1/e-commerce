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
  const { order_date, status, size } = order;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <OrderContainer>
      <OrderContent>
        <OrderLeftSection>
          <OrderInfo order_date={order_date} status={status} />
          <ProductDetails>
            <div>
              <OrderProduct>{`Size: ${size}`}</OrderProduct>
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
