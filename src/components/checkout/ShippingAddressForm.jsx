import React from "react";
import { Section, Title, AddressForm } from "./styles";
import Input from "./Input";

const ShippingAddressForm = ({ formData, handleChange }) => (
  <Section>
    <Title>배송 주소</Title>
    <form>
      <AddressForm>
        <Input
          label="이름"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="홍길동"
          name="name"
          high
        />
        <Input
          label="주소"
          type="text"
          value={formData.address1}
          onChange={handleChange}
          placeholder="등록 기준지를 적어주세요"
          name="address1"
          high
        />
      </AddressForm>
      <AddressForm>
        <Input
          label="상세 주소"
          type="text"
          value={formData.address2}
          onChange={handleChange}
          placeholder="구체적인 상세 주소를 적어주세요"
          name="address2"
        />
        <Input
          label="우편번호"
          type="text"
          value={formData.postalCode}
          onChange={handleChange}
          placeholder="ex- 06234"
          name="postalCode"
        />
      </AddressForm>
    </form>
  </Section>
);

export default ShippingAddressForm;
