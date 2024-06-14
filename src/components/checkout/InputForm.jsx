import React, { useState } from 'react';
import Input from './Input';

const InputForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handleDistrictChange = (e) => setDistrict(e.target.value);
  const handlePostalCodeChange = (e) => setPostalCode(e.target.value);

  return (
    <form>
      <Input
        label="이름"
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="홍길동"
        name="name"
        high
      />
      <Input
        label="주소"
        type="text"
        value={address}
        onChange={handleAddressChange}
        placeholder="상세 주소"
        name="address"
        high
      />
      <Input
        label="시/도"
        type="text"
        value={city}
        onChange={handleCityChange}
        placeholder="서울"
        name="city"
      />
      <Input
        label="구/군"
        type="text"
        value={district}
        onChange={handleDistrictChange}
        placeholder="강남구"
        name="district"
      />
      <Input
        label="우편번호"
        type="text"
        value={postalCode}
        onChange={handlePostalCodeChange}
        placeholder="06234"
        name="postalCode"
      />
    </form>
  );
};

export default InputForm;
