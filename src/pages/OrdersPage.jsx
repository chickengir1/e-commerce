import React, { useEffect, useState } from "react";
import OrderList from "../components/orders/OrderList";
import { PageContainer } from "../components/orders/styles/PageStyles";
import {
  PageLayout,
  SidebarLayout,
  ContentLayout,
} from "../GlobalStyles/LayoutStyles";
import Sidebar from "../components/sidebar/Sidebar";
import NavBar from "../components/nav/nav";
import useFetchData from "../hook/useFetchData";
import API_PATHS from "../utils/apiPaths";

const OrdersPage = () => {
  const {
    data: orders,
    loading: ordersLoading,
    error: ordersError,
  } = useFetchData(API_PATHS.ORDER);

  const [combineOrders, setCombineOrders] = useState([]);

  useEffect(() => {
    if (orders) {
      const processedOrders = orders.flatMap((order) =>
        order.items
          .map((item) => {
            if (!item || !item.item) {
              console.error(`상품 정보 없을때: ${JSON.stringify(item)}`);
              return null;
            }
            const color = item.item.color;
            const product = item.item.productId;

            if (!product || typeof product !== "object") {
              console.error(`id 타입이 다를때 : ${JSON.stringify(item)}`);
              return null;
            }

            const productName = product.name || `Product ${product._id}`;
            const productPrice = product.price || 0;
            const productImage =
              (product.images && product.images[0]) ??
              "https://via.placeholder.com/150";

            return {
              order_date: new Date(order.orderDate).toISOString().split("T")[0],
              status: order.orderState,
              id: order._id,
              size: item.size,
              quantity: item.quantity,
              color,
              productName,
              productPrice,
              productImage,
            };
          })
          .filter(Boolean)
      );

      setCombineOrders(processedOrders);
    }
  }, [orders]);

  if (ordersLoading) return <p>Loading...</p>;
  if (ordersError) return <p>Error: {ordersError.message}</p>;

  return (
    <>
      <NavBar />
      <PageLayout>
        <SidebarLayout>
          <Sidebar />
        </SidebarLayout>
        <ContentLayout>
          <div style={{ marginTop: "4rem" }}>
            <PageContainer>
              <OrderList orders={combineOrders} />
            </PageContainer>
          </div>
        </ContentLayout>
      </PageLayout>
    </>
  );
};

export default OrdersPage;
