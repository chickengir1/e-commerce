import React, { useEffect, useState } from 'react';
import CheckoutTemplate from "../components/checkout/CheckoutTemplate";
import useFetchData from "../hook/useFetchData";
import { getCartItems } from "../utils/getCartItems";
import API_PATHS from "../utils/apiPaths";
import NavBar from "../components/nav/nav";
import Footer from "../components/footer/footer";
import Sidebar from "../components/sidebar/Sidebar";
import { PageLayout, SidebarLayout, ContentLayout } from "../GlobalStyles/LayoutStyles";


const CheckoutPage = () => {
  const { data: products, loading, error } = useFetchData(API_PATHS.PRODUCTS);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (products) {
      const cartItems = getCartItems(products);
      setItems(cartItems);
    }
  }, [products]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div>
          <NavBar />
          <PageLayout>
        <SidebarLayout>
          <Sidebar />
        </SidebarLayout>
        <ContentLayout>
      <CheckoutTemplate items={items} total={total} />
      </ContentLayout>
      </PageLayout>
      <Footer />
    </div>
  );
}

export default CheckoutPage;
