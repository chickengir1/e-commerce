import { useState, useRef, useEffect } from "react";

const useProductDetails = (initialData = {}) => {
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const imageUrlRef = useRef("");

  useEffect(() => {
    if (initialData.price) {
      setPrice(initialData.price.toLocaleString("ko-KR"));
    }
  }, [initialData.price]);

  const handlePriceChange = (event, onChange) => {
    const value = event.target.value;
    const numberValue = Number(value.replace(/[^0-9]/g, ""));
    setPrice(numberValue.toLocaleString("ko-KR"));
    onChange('price', numberValue);
  };

  const handleImageUrlChange = (e) => {
    const newUrl = e.target.value;
    setImageUrl(newUrl);
    imageUrlRef.current = newUrl;
  };

  const handleAddImageUrl = (onChange) => {
    const urlToAdd = imageUrlRef.current.trim();
    if (urlToAdd) {
      onChange('images', urlToAdd);
      alert("이미지 추가 완료!");
    }
  };

  return {
    price,
    imageUrl,
    handlePriceChange,
    handleImageUrlChange,
    handleAddImageUrl,
  };
};

export default useProductDetails;
