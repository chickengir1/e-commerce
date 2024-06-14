import React, { useState, useEffect } from 'react';
import { CartItemContainer, CartItemImageContainer, CartItemInfo, CartItemPrice, BtnContainer } from './Styles/CartItemStyles';
import { StyledButton } from './Styles/ButtonStyles';
import Image from './Image';
import Label from './Label';

const CartItem = ({ product, stock, selectedColor, selectedSize, onDelete }) => {
  const { image, name, price } = product;
  const [isEditing, setIsEditing] = useState(false);
  const [editedSize, setEditedSize] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || {};
    return savedCart[product.id] || selectedSize;
  });

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || {};
    savedCart[product.id] = editedSize;
    localStorage.setItem('cart', JSON.stringify(savedCart));
    console.log('로컬 스토리지 업데이트:', savedCart);
  }, [editedSize, product.id]);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSizeChange = (size, newQty) => {
    setEditedSize((prevSizes) => ({
      ...prevSizes,
      [size]: newQty,
    }));
  };

  const totalStock = Object.values(editedSize).reduce((acc, qty) => acc + qty, 0);
  const totalPrice = (price * totalStock).toLocaleString('ko-KR');
  const unitPrice = price.toLocaleString('ko-KR');

  return (
    <CartItemContainer>
      <CartItemImageContainer>
        <Image src={image} alt={name} />
      </CartItemImageContainer>
      <CartItemInfo>
        <Label size="18px" style={{ fontWeight: 'bold' }}>{name}</Label>
        <Label size="16px" style={{ marginTop: '10px' }}>색상: {selectedColor}</Label>
        <Label size="16px" style={{ marginTop: '10px' }}>
          사이즈:
          {Object.entries(editedSize).map(([size, qty]) => (
            <span key={size} style={{ marginLeft: '10px' }}>
              {size}: 
              {isEditing ? (
                <input 
                  type="number" 
                  value={qty} 
                  min="0"
                  onChange={(e) => handleSizeChange(size, parseInt(e.target.value, 10))}
                  style={{ width: '50px', marginLeft: '5px' }}
                />
              ) : (
                `${qty}개`
              )}
            </span>
          ))}
        </Label>

        <CartItemPrice>
          <Label size="18px" style={{ fontWeight: 'bold' }}>
            {totalPrice}원
            <span style={{ fontSize: '14px', color: '#666', marginLeft: '10px' }}>
              ({totalStock} x {unitPrice}원)
            </span>
          </Label>
          <BtnContainer>
            <StyledButton onClick={handleEditClick}>
              {isEditing ? '저장하기' : '수정하기'}
            </StyledButton>
            <StyledButton $variant="delete" onClick={onDelete}>삭제하기</StyledButton>
          </BtnContainer>
        </CartItemPrice>
      </CartItemInfo>
    </CartItemContainer>
  );
};

export default CartItem;
