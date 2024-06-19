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
  /*const {
    data: variants,
    loading: variantsLoading,
    error: variantsError,
  } = useFetchData("/api/variant/test");
*/
  const [totalOrders, setTotalOrders] = useState([]);

  useEffect(() => {
    if (orders) {
      const flatOrders = orders.flatMap((order) =>
        order.items.map((item) => ({
          order_date: new Date(order.orderDate).toISOString().split("T")[0],
          status: order.orderState,
          size: item.size,
          // quantity: item.quantity, 랜더링 시킬 방법이 없음
        }))
      );
      setTotalOrders(flatOrders);
    }
  }, [orders]);

  // variants랑 id 검사한 다음 필터링 된 것 orders랑 id 검사해서 item으로 묶으려고 했는데 진짜 너무 어려워서 못함

  useEffect(() => {
    if (products) {
      const simplifiedProducts = products.map((product) => ({
        id: product._id,
        name: product.name,
        price: product.price,
        image: product.images[0] || "https://via.placeholder.com/150",
      }));
      console.log("Products:", simplifiedProducts);
    }
  }, [products]);

  /*useEffect(() => {
    if (variants) {
      const simplifiedVariants = variants.map((variant) => ({
        id: variant._id,
        productId: variant.productId,
        color: variant.color,
      }));
      console.log("Variants:", simplifiedVariants);
    }
  }, [variants]);
*/
  if (ordersLoading || productsLoading) return <p>Loading...</p>;
  if (ordersError) return <p>Error: {ordersError.message}</p>;
  if (productsError) return <p>Error: {productsError.message}</p>;
  // if (variantsError) return <p>Error: {variantsError.message}</p>;
  // 해결 불가능
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
              <OrderList orders={totalOrders} />
            </PageContainer>
          </div>
        </ContentLayout>
      </PageLayout>
    </>
  );
};

export default OrdersPage;
