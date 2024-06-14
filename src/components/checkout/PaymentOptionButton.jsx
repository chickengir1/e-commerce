import React, { useRef } from 'react';
import { PaymentOptionsWrapper } from './styles';

const PaymentOptionButton = ({ icon, label, selected, onClick }) => {
  const buttonRef = useRef(null);

  const handleClick = () => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <PaymentOptionsWrapper
      ref={buttonRef}
      selected={selected}
      onClick={handleClick}
      tabIndex={0} 
    >
      {icon}
      <div style={{ height: "15px"}}></div>
      {label}
    </PaymentOptionsWrapper>
  );
};

export default PaymentOptionButton;