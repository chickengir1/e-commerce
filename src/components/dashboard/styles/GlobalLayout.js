import styled from "styled-components";

export const PageLayout = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f7f8fa;
`;

export const SidebarLayout = styled.div`
  width: 250px;
  background-color: #ffffff;
  border-right: 1px solid #e0e0e0;
`;

export const ContentLayout = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 95%;
  margin: 0 auto;
`;
