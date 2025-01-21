import React from "react";
import {
  PaymentFormContainer,
  Form,
  Label,
  Input,
  ExpiryContainer,
  Button,
} from "./styles/CardInfoStyles";
import CardDisplay from "./CardDisplay";
import Select from 'react-select';
import useCardInfo from "./useCardInfo";

const CardInfo = () => {
  const {
    cardInfo,
    months,
    years,
    handleCardNumberChange,
    handleInputChange,
    handleSelectChange,
  } = useCardInfo();

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: '23rem'
    })
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <CardDisplay
        cardNumber={cardInfo.cardNumber}
        cardHolder={cardInfo.cardHolder}
        expiryMonth={cardInfo.expiryMonth}
        expiryYear={cardInfo.expiryYear}
      />
      <PaymentFormContainer>
        <Form autoComplete="off">
          <Label htmlFor="cardNumber">카드 번호</Label>
          <Input
            type="text"
            placeholder="카드 번호"
            value={cardInfo.cardNumber}
            onChange={handleCardNumberChange}
            autoComplete="new-card-number"
            maxLength="19"
          />

          <Label htmlFor="cardHolder">카드 소유자</Label>
          <Input
            type="text"
            placeholder="카드 소유자"
            value={cardInfo.cardHolder}
            onChange={(e) => handleInputChange("cardHolder", e.target.value)}
            autoComplete="new-card-holder"
          />

          <Label>만료 날짜</Label>
          <ExpiryContainer>
            <Select
              options={months}
              placeholder="월"
              onChange={(option) => handleSelectChange("expiryMonth", option)}
              value={months.find((month) => month.value === cardInfo.expiryMonth)}
              styles={customStyles}
            />
            <Select
              options={years}
              placeholder="년"
              onChange={(option) => handleSelectChange("expiryYear", option)}
              value={years.find((year) => year.value === cardInfo.expiryYear)}
              styles={customStyles}
            />
          </ExpiryContainer>

          <Label htmlFor="cvc">CVC</Label>
          <Input
            id="cvc"
            name="cvc"
            type="password"
            placeholder="CVC"
            value={cardInfo.cvc}
            onChange={(e) => handleInputChange("cvc", e.target.value)}
            autoComplete="new-cvc"
          />
          <Button type="submit">등록하기</Button>
        </Form>
      </PaymentFormContainer>
    </div>
  );
};

export default CardInfo;
