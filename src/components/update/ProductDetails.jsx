import React from "react";
import { StyledInput, StyledTextarea, ButtonStyled } from "./styles/Content";
import useProductDetails from "../../hook/useProductDetails";

const ProductDetails = ({ data = {}, onChange }) => {
  const {
    price,
    imageUrl,
    handlePriceChange,
    handleImageUrlChange,
    handleAddImageUrl,
  } = useProductDetails(data);

  return (
    <>
      <StyledInput
        type="text"
        placeholder="제품 이름"
        value={data.name || ''}
        onChange={(e) => onChange('name', e.target.value)}
      />
      <div style={{ display: "flex", gap: "15px" }}>
        <StyledInput
          type="text"
          placeholder="가격"
          value={price}
          onChange={(e) => handlePriceChange(e, onChange)}
        />
      </div>
      <StyledTextarea
        style={{ height: "2.5rem" }}
        placeholder="제품 설명"
        value={data.description || ''}
        onChange={(e) => onChange('description', e.target.value)}
      />
      <StyledTextarea
        value={data.longdescription || ''}
        placeholder="제품 상세 설명"
        onChange={(e) => onChange('longdescription', e.target.value)}
      />
      <div style={{ display: 'flex', gap: '10px' }}>
        <StyledInput
          type="text"
          placeholder="이미지 주소 추가"
          value={imageUrl}
          onChange={handleImageUrlChange}
          required
        />
        <ButtonStyled style={{ height: "38px" }} onClick={() => handleAddImageUrl(onChange)}>추가</ButtonStyled>
      </div>
    </>
  );
};

export default ProductDetails;
