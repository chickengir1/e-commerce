import React from 'react';
import CheckoutTemplate from "../components/checkout/CheckoutTemplate";

const ProductAndVariant = (productId, variantId) => {
  const products = [
    {
      "productId": "201",
      "name": "Db테스트용 티셔츠",
      "description": "Comfortable cotton t-shirt",
      "category": "Men's Tops",
      "brand": "Brand A",
      "variants": [
        {
          "variantId": "2011",
          "color": "Red",
          "size": "M",
          "price": 20000,
          "stock": 50,
          "images": [
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150"
          ]
        },
        {
          "variantId": "2012",
          "color": "Blue",
          "size": "L",
          "price": 20000,
          "stock": 30,
          "images": [
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150"
          ]
        }
      ]
    },
    {
      "productId": "202",
      "name": "Jeans",
      "description": "Stylish denim jeans",
      "category": "Men's Bottoms",
      "brand": "Brand B",
      "variants": [
        {
          "variantId": "2021",
          "color": "Black",
          "size": "32",
          "price": 20000,
          "stock": 20,
          "images": [
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150"
          ]
        },
        {
          "variantId": "2022",
          "color": "Blue",
          "size": "34",
          "price": 20000,
          "stock": 15,
          "images": [
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150"
          ]
        }
      ]
    }
  ];

  const product = products.find(p => p.productId === productId);
  if (product) {
    const variant = product.variants.find(v => v.variantId === variantId);
    if (variant) {
      return { ...product, ...variant };
    }
  }
  return null;
};

const getCartItems = () => {
  const items = [
    {
      productId: '201',
      variantId: '2012',
      quantity: 2
    },
    {
      productId: '202',
      variantId: '2021',
      quantity: 1
    }
  ];

  return items.map(item => {
    const product = ProductAndVariant(item.productId, item.variantId);
    if (product) {
      return {
        imageUrl: product.images[0],
        name: product.name,
        color: product.color,
        size: product.size,
        price: product.price,
        quantity: item.quantity
      };
    }
    return null;
  }).filter(item => item !== null);
};

const CheckoutPage = () => {
  const items = getCartItems();
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <CheckoutTemplate items={items} total={total} />
    </div>
  );
}

export default CheckoutPage;
