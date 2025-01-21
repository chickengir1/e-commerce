import React from 'react';
import { SizeSelectorContainer, SizeLabel, SizeButtonGroup, SizeButton } from './styles/SizeSelectorStyles';

const sizes = ['XS', 'S', 'M', 'L', 'XL'];

const SizeSelector = ({ selectedSize, setSelectedSize }) => {
  return (
    <SizeSelectorContainer>
      <SizeLabel>사이즈</SizeLabel>
      <SizeButtonGroup>
        {sizes.map((size) => (
          <SizeButton
            key={size}
            onClick={() => setSelectedSize(size)}
            style={{ backgroundColor: selectedSize === size ? '#a3b0dc' : '#fff' }}
          >
            {size}
          </SizeButton>
        ))}
      </SizeButtonGroup>
    </SizeSelectorContainer>
  );
};

export default SizeSelector;
