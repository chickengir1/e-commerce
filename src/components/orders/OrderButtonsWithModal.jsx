import React, { useState } from "react";
import Modal from "react-modal";
import { OrderActionsButton } from "./styles/OrderItemStyles";
import { useDelete } from "../../hook/useDelete";
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

const OrderButtonsWithModal = ({ order }) => {
  const { loading: deleteLoading, deleteRequest } = useDelete();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleDelete = async () => {
    if (order.id) {
      const response = await deleteRequest(order.id);
      if (response && response.message) {
        alert(response.message);
        await window.location.reload();
      }
    } else {
      console.error("ID 없음");
    }
  };

  return (
    <>
      <div style={{ display: "flex", gap: "5px" }}>
        <OrderActionsButton onClick={handleDelete} disabled={deleteLoading}>
          {deleteLoading ? "취소 중..." : "주문 취소"}
        </OrderActionsButton>
        <OrderActionsButton onClick={openModal}>주문 수정</OrderActionsButton>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Order Edit Modal"
        ariaHideApp={false}
        style={customStyles}
      >
        <OrderEdit order={order} closeModal={closeModal} />
      </Modal>
    </>
  );
};

export default OrderButtonsWithModal;
