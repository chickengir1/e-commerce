import React, { useState } from "react";
import { Wrapper, SummaryWrapper, Section, BoldRow } from "./styles";
import OrderSummary from "./OrderSummary";
import OrderConfirmation from "./OrderConfirmation";
import ShippingAddressForm from "./ShippingAddressForm";
import Button from "./Button";
import useOrder from "../../hook/useOrder";
import { useNavigate } from "react-router-dom";
import Notification from "../notification/Notification";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const CheckoutTemplate = ({ items, total }) => {
  const navigate = useNavigate();
  const { formData, handleChange, submitOrder } = useOrder(items);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const handleButtonClick = async () => {
    if (notificationMessage) {
      setShowNotification(true);
      await delay(2000);
      setShowNotification(false);
      return;
    }

    try {
      console.log("Form Data:", formData);
      console.log("Items:", items);

      const responseData = await submitOrder();
      window.localStorage.removeItem("cart");
      setNotificationMessage("주문이 성공적으로 완료되었습니다!");
      setShowNotification(true);
      await delay(2000);
      setShowNotification(false);
      navigate("/");
      console.log("Response Data:", responseData);
    } catch (error) {
      console.error("Error:", error);
      setNotificationMessage("주문 처리 중 오류가 발생했습니다.");
      setShowNotification(true);
      await delay(2000);
      setShowNotification(false);
    }
  };

  return (
    <Wrapper>
      <SummaryWrapper>
        <OrderSummary items={items} />
        <ShippingAddressForm
          formData={formData}
          handleChange={handleChange}
          setError={setNotificationMessage}
        />
        <Section style={{ flex: 1 }}>
          <OrderConfirmation items={items} total={total} />
          <BoldRow style={{ marginTop: "5rem" }}>
            <span>총 금액 :</span>
            <span>{total.toLocaleString("ko-KR")} 원</span>
          </BoldRow>
          <Button onClick={handleButtonClick}>결제하기</Button>
        </Section>
      </SummaryWrapper>
      {showNotification && <Notification message={notificationMessage} />}
    </Wrapper>
  );
};

export default CheckoutTemplate;
