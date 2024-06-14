import { useState } from "react";

const initialCardInfo = {
  cardNumber: "",
  cardHolder: "",
  expiryMonth: "",
  expiryYear: "",
  cvc: "",
};

const useCardInfo = () => {
  const [cardInfo, setCardInfo] = useState(initialCardInfo);

  const months = Array.from({ length: 12 }, (_, i) => ({
    value: String(i + 1).padStart(2, "0"),
    label: String(i + 1).padStart(2, "0"),
  }));

  const years = Array.from({ length: 10 }, (_, i) => ({
    value: String(new Date().getFullYear() + i),
    label: String(new Date().getFullYear() + i),
  }));

  const handleCardNumberChange = (e) => {
    const formattedNumber = e.target.value
      .replace(/\s/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim();
    setCardInfo((prevInfo) => ({ ...prevInfo, cardNumber: formattedNumber }));
  };

  const handleInputChange = (key, value) => {
    setCardInfo((prevInfo) => ({ ...prevInfo, [key]: value }));
  };

  const handleSelectChange = (key, option) => {
    setCardInfo((prevInfo) => ({ ...prevInfo, [key]: option.value }));
  };

  return {
    cardInfo,
    months,
    years,
    handleCardNumberChange,
    handleInputChange,
    handleSelectChange,
  };
};

export default useCardInfo;
