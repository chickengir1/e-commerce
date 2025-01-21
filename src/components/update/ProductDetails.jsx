import React, { useState, useEffect } from "react";
import { StyledInput, StyledTextarea, ButtonStyled, ImageUrl } from "./styles/Content";
import Notification from "../notification/Notification";

const ProductDetails = ({ data = {}, onChange }) => {
  const [price, setPrice] = useState(data.price || "");
  const [imageUrl, setImageUrl] = useState("");
  const [images, setImages] = useState(data.images || []);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    setPrice(data.price || "");
    setImages(data.images || []);
  }, [data]);

  const handlePriceChange = (event) => {
    const value = event.target.value;
    const numberValue = Number(value.replace(/[^0-9]/g, ""));
    setPrice(numberValue.toLocaleString("ko-KR"));
    onChange('price', numberValue);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleAddImageUrl = () => {
    const url = imageUrl.trim();
    if (url && isValidUrl(url) && !images.includes(url)) {
      setImages((prevImages) => {
        const updatedImages = [...prevImages, url];
        onChange('images', updatedImages);
        setImageUrl("");
        setNotification("이미지 추가 완료!");
        setTimeout(() => setNotification(""), 1000);
        return updatedImages;
      });
    } else if (images.includes(url)) {
      setNotification("이미지가 이미 추가되었습니다!");
      setTimeout(() => setNotification(""), 1000);
    } else {
      setNotification("유효한 이미지 주소를 입력해주세요!");
      setTimeout(() => setNotification(""), 1000);
    }
  };

  const handleRemoveImage = (url) => {
    const updatedImages = images.filter(image => image !== url);
    setImages(updatedImages);
    onChange('images', updatedImages);
    setNotification("이미지 삭제 완료!");
    setTimeout(() => setNotification(""), 1000);
  };

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  };

  return (
    <>
      {notification && <Notification message={notification} />}
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
          onChange={handlePriceChange}
        />
      </div>
      <StyledTextarea
        style={{ height: "2.5rem" }}
        placeholder="제품 설명"
        value={data.description || ''}
        onChange={(e) => onChange('description', e.target.value)}
      />
      <StyledTextarea
        placeholder="상세 설명"
        value={data.longdescription || ''}
        onChange={(e) => onChange('longdescription', e.target.value)}
      />
      <div style={{ display: 'flex', gap: '10px'}}>
        <StyledInput
          type="text"
          placeholder="이미지 주소 추가"
          value={imageUrl}
          onChange={handleImageUrlChange}
        />
         <ButtonStyled style={{ height: "38px" , width : "8rem"}} onClick={handleAddImageUrl}>추가</ButtonStyled>
         </div>
         <div>
         {images.map((url, index) => (
          <div key={index} style={{display: 'flex', gap: '10px' , marginBottom : "1rem" ,justifyContent : "space-between" ,alignItems : "center"}}>
            <ImageUrl>{url}</ImageUrl>
            <img src={url} alt={`product ${index}`} style={{ width: "50px", height: "40px" }} />
        <ButtonStyled style={{ height: "38px", width : "6.5rem" }} onClick={() => handleRemoveImage(url)}>삭제</ButtonStyled>
        </div>
      ))}
        </div>
     
    </>
  );
};

export default ProductDetails;
