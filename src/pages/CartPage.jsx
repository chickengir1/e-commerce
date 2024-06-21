import React, { useEffect, useState } from 'react';
import CombinedTemplate from '../components/cart/CombinedTemplate';
import Sidebar from '../components/sidebar/Sidebar';
import NavBar from "../components/nav/nav";
import { PageLayout, SidebarLayout, ContentLayout } from '../GlobalStyles/LayoutStyles';
import Notification from '../components/notification/Notification';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [error, setError] = useState(null);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const response = await fetch('/api/product');
        if (!response.ok) {
          throw new Error('네트워크 응답 없음');
        }
        const data = await response.json();
        setRelatedProducts(data);
      } catch (error) {
        console.error('상품 불러오는 중 오류 발생: ', error);
        setError('관련 상품을 불러오는 중 오류가 발생했습니다.');
      }
    };

    fetchRelatedProducts();

    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const handleDelete = (id) => {
    const updatedCartItems = cartItems.filter((item, index) => `${item.productId}-${index}` !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    setNotification('상품이 장바구니에서 삭제되었습니다.');
    setTimeout(() => {
      setNotification(null);
    }, 2000);
  };

  const handleDeleteAll = () => {
    setCartItems([]);
    localStorage.removeItem('cart');
    setNotification('장바구니가 비워졌습니다.');
    setTimeout(() => {
      setNotification(null);
    }, 2000);
  };

  const cartItemsWithDetails = cartItems.map((cartItem, index) => {
    const product = relatedProducts.find(p => p._id === cartItem.productId);
    if (!product) {
      return null;
    }

    const totalQuantity = Object.values(cartItem.sizes).reduce((acc, sizeQty) => acc + sizeQty, 0);
    return {
      id: `${cartItem.productId}-${index}`,
      product: {
        name: product.name,
        price: product.price,
        image: product.images?.[0],
      },
      selectedColor: cartItem.color,
      selectedSize: cartItem.sizes,
      quantity: totalQuantity
    };
  }).filter(item => item !== null);

  const totalAmount = cartItemsWithDetails.reduce((acc, { product, quantity }) => {
    return acc + product.price * quantity;
  }, 0).toLocaleString('ko-KR');

  return (
    <>
      <NavBar />
      <PageLayout>
        <SidebarLayout>
          <Sidebar />
        </SidebarLayout>
        <ContentLayout>
          {error && <div>{error}</div>}
          <CombinedTemplate items={cartItemsWithDetails} totalAmount={totalAmount} onDelete={handleDelete} onDeleteAll={handleDeleteAll} />
        </ContentLayout>
      </PageLayout>
      {notification && <Notification message={notification} />}
    </>
  );
};

export default CartPage;
