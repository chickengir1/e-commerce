import { useState } from "react";
import { validateForm } from "../utils/validation";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const usePersonalInfo = (initialUser, apiUrl) => {
  const [formData, setFormData] = useState({
    name: initialUser.name,
    email: initialUser.email,
    phoneNumber: initialUser.phoneNumber,
  });
  const [notification, setNotification] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "phoneNumber" ? formatPhoneNumber(value) : value,
    }));
  };

  const formatPhoneNumber = (value) => {
    const phoneNumber = value.replace(/\D/g, ""); 
    let formattedNumber = "";
    
    if (phoneNumber.length > 0) {
        formattedNumber += phoneNumber.slice(0, 3);
    }
    if (phoneNumber.length > 3) {
        formattedNumber += "-" + phoneNumber.slice(3, 7);
    }
    if (phoneNumber.length > 7) {
        formattedNumber += "-" + phoneNumber.slice(7, 11);
    }
    
    return formattedNumber;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errorMessage = validateForm(formData, initialUser);
    if (errorMessage) {
      setNotification(errorMessage);
      await delay(1500);
      setNotification("");
      return;
    }
    console.log(validateForm)

    const cleanedData = {
      ...formData,
      phoneNumber: formData.phoneNumber.replace(/-/g, ''),
    };

    try {
      const response = await fetch(apiUrl, { 
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cleanedData),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message);
      }

      setNotification("회원정보가 성공적으로 변경되었습니다.");
      await delay(1500);
      setNotification("");
    } catch (error) {
      setNotification(error.message);
      await delay(1500);
      setNotification("");
    }
  };

  return {
    formData,
    notification,
    handleChange,
    handleSubmit,
  };
};

export default usePersonalInfo;
