import React from 'react';
import Image from './Image';
import Text from './Text';
import { Card, TextContainer, LineContainer } from './styles/LayoutStyles';
import { Line } from '../../GlobalStyles/LayoutStyles';

const ProductInfo = ({ imageSrc, name, description, price }) => (
  <>
    <Card>
      <Image src={imageSrc} alt={name} /> 
    </Card>
    <LineContainer>
      <Line />
    </LineContainer>
    <TextContainer>
      <Text type="h2">{name}</Text>
      <Text type="description">{description}</Text>
      <Text>{`${price.toLocaleString("ko-KR")} 원`}</Text>
    </TextContainer>
  </>
);

export default ProductInfo;
