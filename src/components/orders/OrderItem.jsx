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
    backgroundColor: '#fff',
    border: 'none'
  },
};

const OrderItem = ({ order, onDelete }) => {
  const { order_date, status, product, order_id } = order;
  const { name: productName, orderItems } = product;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <OrderContainer>
      <OrderContent>
        <OrderLeftSection>
          <OrderInfo order_date={order_date} status={status} />
          {orderItems.map((item, index) => (
            <ProductDetails key={index}>
              <ProductImage src={item.images[0]} alt={productName} />
              <div>
                <OrderProduct>{`${productName} - ${item.color} / ${item.size}`}</OrderProduct>
                <OrderPrice>{`총 금액 : ${(item.totalPrice).toLocaleString("ko-KR")} 원`}</OrderPrice>
                <OrderPrice>{`${item.stock} X ${(item.price).toLocaleString("ko-KR")} 원`}</OrderPrice>
              </div>
            </ProductDetails>
          ))}
        </OrderLeftSection>
        <OrderRightSection>
          <OrderActions>
            <OrderPrice>{`ID - #${order_id}`}</OrderPrice>
            <OrderButtons onDelete={onDelete} openModal={openModal} order_id={order_id} />
          </OrderActions>
        </OrderRightSection>
      </OrderContent>

      <OrderEditModal isOpen={isModalOpen} closeModal={closeModal} order={order} />
    </OrderContainer>
  );
};

const OrderInfo = ({ order_date, status }) => (
  <>
    <OrderDate>{order_date}</OrderDate>
    <OrderStatus>{status}</OrderStatus>
  </>
);

const OrderButtons = ({ onDelete, openModal, order_id }) => (
  <div style={{ display: "flex", gap: "5px" }}>
    <OrderActionsButton onClick={() => onDelete(order_id)}>주문 취소</OrderActionsButton>
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
