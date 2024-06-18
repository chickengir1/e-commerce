import React from 'react';
import Select from 'react-select';
import {
  FilterContainer,
  FilterButtonsContainer,
  SelectContainer,
  Buttons
} from './styles/ContentWrapper';  

const FilterButtons = ({ filterType, brands, categories, handleFilter, setSelectedBrand, setSelectedCategory, selectedBrand, selectedCategory }) => {
  const brandOptions = brands.map(brand => ({
    value: brand._id,
    label: brand.name
  }));

  const categoryOptions = categories.map(category => ({
    value: category._id,
    label: category.name
  }));

  return (
    <FilterContainer>
      <FilterButtonsContainer>
        <Buttons onClick={() => handleFilter('all')}>전체 상품</Buttons>
        <Buttons onClick={() => handleFilter('brand')}>브랜드별</Buttons>
        <Buttons onClick={() => handleFilter('category')}>카테고리별</Buttons>
      </FilterButtonsContainer>
      {filterType !== 'all' && (
        <SelectContainer>
          {filterType === 'brand' && (
            <Select
              options={brandOptions}
              onChange={(option) => setSelectedBrand(option ? option.value : null)}
              value={brandOptions.find(option => option.value === selectedBrand)}
              placeholder="Select Brand"
            />
          )}
          {filterType === 'category' && (
            <Select
              options={categoryOptions}
              onChange={(option) => setSelectedCategory(option ? option.value : null)}
              value={categoryOptions.find(option => option.value === selectedCategory)}
              placeholder="Select Category"
            />
          )}
        </SelectContainer>
      )}
    </FilterContainer>
  );
};

export default FilterButtons;