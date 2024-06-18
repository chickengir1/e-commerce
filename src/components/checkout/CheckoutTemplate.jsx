import React from 'react';
import { Wrapper, SummaryWrapper, Section, BoldRow } from './styles';
import OrderSummary from './OrderSummary';
import OrderConfirmation from './OrderConfirmation';
import ShippingAddressForm from './ShippingAddressForm';
import Button from './Button';
import useOrder from '../../hook/useOrder';

const CheckoutTemplate = ({ items, total }) => {
  const { formData, handleChange, submitOrder } = useOrder(items);

  const handleButtonClick = async () => {
    try {
      const responseData = await submitOrder();
      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Wrapper>
      <SummaryWrapper>
        <OrderSummary items={items} />
        <ShippingAddressForm formData={formData} handleChange={handleChange} />
        <Section style={{ flex: 1 }}>
          <OrderConfirmation items={items} total={total} />
          <BoldRow style={{ marginTop: '5rem' }}>
            <span>총 금액 :</span>
            <span>{total.toLocaleString('ko-KR')} 원</span>
          </BoldRow>
          <Button onClick={handleButtonClick}>결제하기</Button>
        </Section>
      </SummaryWrapper>
    </Wrapper>
  );
};

export default CheckoutTemplate;
