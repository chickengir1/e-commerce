import React, { useState, useRef } from "react";
import { StyledInput, StyledTextarea, ButtonStyled } from "./styles/Content";

const ProductDetails = ({ onChange }) => {
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const imageUrlRef = useRef("");

  const handlePriceChange = (event) => {
    const value = event.target.value;
    const numberValue = Number(value.replace(/[^0-9]/g, ""));
    setPrice(numberValue.toLocaleString("ko-KR"));
    onChange('price', numberValue);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
    imageUrlRef.current = e.target.value;
  };

  const handleAddImageUrl = () => {
    if (imageUrlRef.current.trim()) {
      onChange('images', imageUrlRef.current);
      alert("이미지 추가 완료!")
    }
  };

  return (
    <>
      <StyledInput type="text" placeholder="제품 이름" onChange={(e) => onChange('name', e.target.value)} />
      <div style={{ display: "flex", gap: "15px" }}>
        <StyledInput
          type="text"
          placeholder="가격"
          value={price}
          onChange={handlePriceChange}
        />
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <StyledInput
          type="text"
          placeholder="이미지 주소 추가"
          value={imageUrl}
          onChange={handleImageUrlChange}
          required
        />
        <ButtonStyled style={{ height: "38px" }} onClick={handleAddImageUrl}>추가</ButtonStyled>
      </div>
      <StyledTextarea style={{ height: "2.5rem" }} placeholder="제품 설명" onChange={(e) => onChange('description', e.target.value)} />
      <StyledTextarea placeholder="상세 설명" onChange={(e) => onChange('longdescription', e.target.value)} />
    </>
  );
};

export default ProductDetails;
