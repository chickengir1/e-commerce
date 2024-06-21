import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { ColorSelectorStyled } from './styles/ColorSelectorStyles';
import { SizeLabel } from './styles/SizeSelectorStyles';

const RAINBOW_COLORS = [
  { name: '빨강', value: '#FF0000' },
  { name: '주황', value: '#FFA500' },
  { name: '노랑', value: '#FFFF00' },
  { name: '초록', value: '#00FF00' },
  { name: '파랑', value: '#0000FF' },
  { name: '남색', value: '#4B0082' },
  { name: '보라', value: '#EE82EE' },
];

const getRandomColors = (colorsArray, numColors) => {
  const shuffled = [...colorsArray].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numColors);
};

const ColorSelector = ({ colors, selectedColor, setSelectedColor }) => {
  const [availableColors, setAvailableColors] = useState([]);

  useEffect(() => {
    const validColors = Array.isArray(colors) && colors.length > 0 ? colors : getRandomColors(RAINBOW_COLORS, 4);
    setAvailableColors(validColors);
  }, [colors]);

  const handleChange = (selectedOption) => {
    setSelectedColor(selectedOption ? selectedOption.label : '');
  };

  const options = availableColors.map((color) => ({
    value: color.value,
    label: color.name,
  }));

  return (
    <ColorSelectorStyled>
      <SizeLabel style={{ marginBottom: "20px" }}>색상</SizeLabel>
      <Select
        value={options.find(option => option.label === selectedColor)}
        onChange={handleChange}
        options={options}
        placeholder="색상 선택"
        styles={{
          option: (provided) => ({ ...provided, padding: 10 }),
          control: (provided) => ({ ...provided, marginBottom: '20px' }),
        }}
      />
    </ColorSelectorStyled>
  );
};

export default ColorSelector;
