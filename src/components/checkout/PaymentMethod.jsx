import React, { useState } from 'react';
import { Section, Title, PaymentOptions, OptionWrapper } from './styles';
import PaymentOptionButton from './PaymentOptionButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faCoffee, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState('credit-card');

  return (
    <Section>
      <Title>결제 수단</Title>
      <PaymentOptions>
        <OptionWrapper>
          <PaymentOptionButton
            icon={<FontAwesomeIcon icon={faCreditCard} />}
            label="신용카드"
            selected={selectedMethod === 'credit-card'}
            onClick={() => setSelectedMethod('credit-card')}
          />
        </OptionWrapper>
        <OptionWrapper>
          <PaymentOptionButton
            icon={<FontAwesomeIcon icon={faCoffee} />}
            label="카카오 페이"
            selected={selectedMethod === 'kakao-pay'}
            onClick={() => setSelectedMethod('kakao-pay')}
          />
        </OptionWrapper>
        <OptionWrapper>
          <PaymentOptionButton
            icon={<FontAwesomeIcon icon={faMobileAlt} />}
            label="네이버 페이"
            selected={selectedMethod === 'naver-pay'}
            onClick={() => setSelectedMethod('naver-pay')}
          />
        </OptionWrapper>
      </PaymentOptions>
    </Section>
  );
};

export default PaymentMethod;
