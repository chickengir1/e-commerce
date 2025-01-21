import React from "react";
import { CardContainer, Card } from "./styles/BoardLayout";
import { Label } from "../checkout/styles";
import { CommonTitle } from "./styles/FontStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faBoxOpen, faIndustry, faWarehouse } from '@fortawesome/free-solid-svg-icons';

const PriceData = ({ priceData }) => {
  const renderCard = (icon, label, value) => (
    <Card>
      <div style={{ display: 'flex', alignItems: 'center', padding: '10px', margin: '-16px', marginBottom: '2.5rem' }}>
        <FontAwesomeIcon icon={icon} style={{ margin: '8px', color: '#aaa' }} />
        <Label>{label}</Label>
      </div>
      <CommonTitle>{value}</CommonTitle>
    </Card>
  );

  return (
    <>
      <CardContainer>
        {renderCard(faDollarSign, "총 매출", `${priceData.totalSales.toLocaleString('ko-KR')} 원`)}
        {renderCard(faBoxOpen, "총 제품 수", `${priceData.totalProducts.toLocaleString('ko-KR')} 개`)}
      </CardContainer>
      <CardContainer>
        {renderCard(faIndustry, "총 브랜드 수", `${priceData.totalBrands.toLocaleString('ko-KR')} 개`)}
        {renderCard(faWarehouse, "총 가치", `${priceData.totalStock.toLocaleString('ko-KR')} 원`)}
      </CardContainer>
    </>
  );
};

export default PriceData;
