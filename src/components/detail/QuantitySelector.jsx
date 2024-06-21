import React from 'react';
import { QuantitySelectorStyled } from './styles/ColorSelectorStyles';
import { SizeLabel } from './styles/SizeSelectorStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const QuantitySelector = ({ quantity, setQuantity }) => {
  const handleIncrease = () => setQuantity(prev => Math.min(prev + 1, 10));
  const handleDecrease = () => setQuantity(prev => Math.max(prev - 1, 1));

  return (
    <QuantitySelectorStyled>
      <SizeLabel style={{ marginBottom: "20px" }}>수량</SizeLabel>
      <div className="quantity-control">
        <button onClick={handleDecrease}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <input type="number" value={quantity} readOnly />
        <button onClick={handleIncrease}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </QuantitySelectorStyled>
  );
};

export default QuantitySelector;
