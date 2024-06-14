import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductInfo from './ProductInfo';
import { Container, Card } from './styles/LayoutStyles';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const imageSrc = product.images && product.images.length > 0 ? product.images[0] : null;

  const handleClick = () => {
    navigate(`/product/${product._id}`);
  };

  return (
    <Container onClick={handleClick}>
      <Card>
        <ProductInfo
          imageSrc={imageSrc}
          name={product.name}
          description={product.description}
          price={product.price}
        />
      </Card>
    </Container>
  );
};

export default ProductCard;
