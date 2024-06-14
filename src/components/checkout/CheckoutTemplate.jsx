import React from 'react';
import { Wrapper, SummaryWrapper, Section } from './styles';
import OrderSummary from './OrderSummary';
import OrderConfirmation from './OrderConfirmation';
import ShippingAddressForm from './ShippingAddressForm';
import PaymentMethod from './PaymentMethod';
import Button from './Button';

const CheckoutTemplate = ({ items, total }) => (
  <Wrapper>
    <SummaryWrapper>
      <OrderSummary items={items} />
      <Section style={{ flex: 1 }}>
        <OrderConfirmation items={items} total={total} />
        <Button>결제하기</Button>
      </Section>
    </SummaryWrapper>
    <ShippingAddressForm />
    <PaymentMethod />
  </Wrapper>
);

export default CheckoutTemplate;
