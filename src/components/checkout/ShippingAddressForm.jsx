import React, { useEffect } from "react";
import { Section, Title, AddressForm } from "./styles";
import Input from "./Input";

const ShippingAddressForm = ({ formData, handleChange, setError }) => {
  useEffect(() => {
    if (
      !formData.name ||
      !formData.address1 ||
      !formData.address2 ||
      !formData.postalCode
    ) {
      setError("모든 필드를 채워주세요.");
    } else {
      setError("");
    }
  }, [formData, setError]);

  return (
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
            error={formData.name ? "" : "이름을 입력하세요."}
          />
          <Input
            label="주소"
            type="text"
            value={formData.address1}
            onChange={handleChange}
            placeholder="등록 기준지를 적어주세요"
            name="address1"
            high
            error={formData.address1 ? "" : "주소를 입력하세요."}
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
            error={formData.address2 ? "" : "상세 주소를 입력하세요."}
          />
          <Input
            label="우편번호"
            type="text"
            value={formData.postalCode}
            onChange={handleChange}
            placeholder="ex- 06234"
            name="postalCode"
            error={formData.postalCode ? "" : "우편번호를 입력하세요."}
          />
        </AddressForm>
      </form>
    </Section>
  );
};

export default ShippingAddressForm;
