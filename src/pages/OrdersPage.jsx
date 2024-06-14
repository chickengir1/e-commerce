import React, { useState } from "react";
import OrderList from "../components/orders/OrderList";
import { PageContainer } from "../components/orders/styles/PageStyles";
import {
  PageLayout,
  SidebarLayout,
  ContentLayout,
} from "../GlobalStyles/LayoutStyles";
import Sidebar from "../components/sidebar/Sidebar";
import NavBar from "../components/nav/nav";

const user = {
  avatar: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png",
  name: "홍길동",
  email: "honggildong@example.com",
  phone: "010-1234-5678",
};

const ordersData = {
  recent_orders: [
    {
      order_date: "2023-02-23",
      order_id: "11415",
      status: "주문 완료",
      name: "홍길동",
      product: {
        productId: "201",
        name: "길동 티셔츠",
        description: "Comfortable cotton t-shirt",
        category: "Men's Tops",
        brand: "Brand A",
        variants: [
          {
            variantId: "2011",
            color: "Red",
            size: "M",
            price: 20000,
            stock: 5,
            images: [
              "https://via.placeholder.com/150",
              "https://via.placeholder.com/150",
            ],
          },
        ],
      },
    },
    {
      order_date: "2023-02-21",
      order_id: "11416",
      status: "주문 완료",
      name: "홍길동",
      product: {
        productId: "202",
        name: "길동 바지",
        description: "Comfortable cotton pants",
        category: "Men's Bottoms",
        brand: "Brand B",
        variants: [
          {
            variantId: "2021",
            color: "Blue",
            size: "L",
            price: 30000,
            stock: 2,
            images: [
              "https://via.placeholder.com/150",
              "https://via.placeholder.com/150",
            ],
          },
        ],
      },
    },
  ],
};

const OrdersPage = () => {
  const [orders, setOrders] = useState(ordersData.recent_orders);

  const handleDelete = (orderId) => {
    setOrders(orders.filter((order) => order.order_id !== orderId));
  };

  return (
    <>
      <NavBar />
      <PageLayout>
        <SidebarLayout>
          <Sidebar user={user} />
        </SidebarLayout>
        <ContentLayout>
          <div style={{ marginTop: "4rem" }}>
            <PageContainer>
              <OrderList orders={orders} onDelete={handleDelete} />
            </PageContainer>
          </div>
        </ContentLayout>
      </PageLayout>
    </>
  );
};

export default OrdersPage;
