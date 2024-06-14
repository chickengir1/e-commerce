import React from 'react';
import {
  Section,
  Title,
  Table,
  THead,
  TBody,
  TableRow,
  Cell,
  ProductCell,
  ProductContainer,
  ProductImage,
  ProductDetails,
  ProductName,
  ProductDescription
} from './styles';

const OrderSummary = ({ items }) => (
  <Section>
    <Title>주문 요약</Title>
    <Table>
      <THead>
        <TableRow>
          <Cell>품목</Cell>
          <Cell>가격</Cell>
          <Cell>수량</Cell>
          <Cell>총 금액</Cell>
        </TableRow>
      </THead>
      <TBody>
        {items.map((item, index) => (
          <TableRow key={index}>
            <ProductCell>
              <ProductContainer>
                <ProductImage src={item.imageUrl} alt="제품 이미지" />
                <ProductDetails>
                  <ProductName>{item.name}</ProductName>
                  <ProductDescription>색상: {item.color}, 사이즈: {item.size}</ProductDescription>
                </ProductDetails>
              </ProductContainer>
            </ProductCell>
            <Cell>{item.price.toLocaleString('ko-KR')} 원</Cell>
            <Cell>{item.quantity}</Cell>
            <Cell>{(item.price * item.quantity).toLocaleString('ko-KR')} 원</Cell>
          </TableRow>
        ))}
      </TBody>
    </Table>
  </Section>
);

export default OrderSummary;
