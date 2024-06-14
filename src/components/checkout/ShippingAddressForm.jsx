import React from 'react';
import {  Section,Title,   AdressForm } from './styles';
import Input from './Input';

const ShippingAddressForm = () => (
  <Section>

    <Title>배송 주소</Title>
      <AdressForm>
          <Input label="이름" placeholder="홍길동" high />
          <Input label="주소" placeholder="상세 주소" high />
      </AdressForm>
      <AdressForm>
          <Input label="시/도" placeholder="서울" />
          <Input label="구/군" placeholder="강남구" />
          <Input label="우편번호" placeholder="06234" />
      </AdressForm>

  </Section>
);

export default ShippingAddressForm;
