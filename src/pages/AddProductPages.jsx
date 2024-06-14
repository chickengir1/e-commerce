import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import {
  PageLayout,
  SidebarLayout,
  ContentLayout,
} from "../GlobalStyles/LayoutStyles";
import NavBar from "../components/nav/nav";
import Footer from "../components/footer/footer";
import ProductRoot from "../components/add/ProductRoot";

const AddProductPages = () => {
  return (
    <>
      <NavBar />
      <PageLayout>
        <SidebarLayout>
          <Sidebar />
        </SidebarLayout>
        <ContentLayout>
          <ProductRoot />
        </ContentLayout>
      </PageLayout>
      <Footer />
    </>
  );
};

export default AddProductPages;
