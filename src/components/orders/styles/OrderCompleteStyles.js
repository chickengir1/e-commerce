import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme === 'dark' ? '#1f2937' : '#ffffff'};
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  max-width: 48rem;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const StatusText = styled.span`
  color: #10b981;
  font-weight: 500;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

export const Section = styled.div``;

export const SectionTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.span`
  color: ${({ theme }) => theme === 'dark' ? '#9ca3af' : '#6b7280'};
`;

export const Value = styled.span`
  font-weight: 500;
`;

export const OrderList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const OrderDetails = styled.div``;

export const OrderTitle = styled.h3`
  font-weight: 500;
`;

export const OrderQuantity = styled.p`
  color: ${({ theme }) => theme === 'dark' ? '#9ca3af' : '#6b7280'};
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme === 'dark' ? '#9ca3af' : '#6b7280'};
`;

export const Button = styled.button`
  background: #7485BC;
  border-radius: 5px;
  color: #fff;
  border: none;
  width: 120px;
  height: 30px;
  font-size: 16px;
  font-family: var(--font-nanumfont);

  &:hover {
    background: #D1DCFD;
    color: #506BC1;
  }

  &:before {
    display: none;
  }
`