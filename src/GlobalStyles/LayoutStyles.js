import styled from "styled-components";

export const PageLayout = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const ContentLayout = styled.div`
  width: 100%;
`;

export const SidebarLayout = styled.div`
  width: 350px;
  height: 100vh;
  z-index: 1;
  position: sticky;
  top: 0;
`;

export const MainContent = styled.div`
  padding: 20px;
  background: #fff;
`;

export const CartContainer = styled.div`
  width: 90%;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;

export const Line = styled.div`
  flex: 1;
  height: 2px;
  background-color: #b6bfda;
`;
