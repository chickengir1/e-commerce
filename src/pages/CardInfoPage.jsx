import React from "react";
import CardInfo from "../components/CardInfo/CardInfo";
import NavBar from "../components/nav/nav";
import Sidebar from "../components/sidebar/Sidebar";
import {
  PageLayout,
  SidebarLayout,
  ContentLayout,
} from "../GlobalStyles/LayoutStyles";
import styled from "styled-components";

export const Container = styled.div`
  margin-top: 5rem;
  border: 1px solid #eee;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  width : 90%;
  height : 85%;
  background-color: #fff;
  margin : 0 auto;
`;

const CardInfoPage = () => {
  return (
    <div>
      <NavBar />
      <PageLayout>
        <SidebarLayout>
          <Sidebar />
        </SidebarLayout>
        <ContentLayout>
            <Container style={{marginTop: "3.5rem"}}>
          <CardInfo />
          </Container>
        </ContentLayout>
      </PageLayout>
    </div>
  );
};

export default CardInfoPage;
