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
  const {
    data: products,
    loading: productsLoading,
    error: productsError,
  } = useFetchData(API_PATHS.PRODUCTS);

  const [combineOrders, setCombineOrders] = useState([]);

  useEffect(() => {
    if (orders && products) {
      const processedOrders = orders.flatMap((order) =>
        order.items.map((item) => ({
          order_date: new Date(order.orderDate).toISOString().split("T")[0],
          status: order.orderState,
          size: item.size,
          quantity: item.quantity,
          productId: item.product,
        }))
      );

      const processedProducts = products.reduce((acc, product) => {
        acc[product._id] = {
          name: product.name,
          price: product.price,
          image: product.images[0] || "https://via.placeholder.com/150",
        };
        return acc;
      }, {});

      const combined = processedOrders.map((order, index) => ({
        ...order,
        productName:
          processedProducts[order.productId]?.name || `Product ${index + 1}`,
        productPrice: processedProducts[order.productId]?.price || 0,
        productImage:
          processedProducts[order.productId]?.image ??
          "https://via.placeholder.com/150",
      }));

      setCombineOrders(combined);
    }
  }, [orders, products]);

  if (ordersLoading || productsLoading) return <p>Loading...</p>;
  if (ordersError) return <p>Error: {ordersError.message}</p>;
  if (productsError) return <p>Error: {productsError.message}</p>;

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
