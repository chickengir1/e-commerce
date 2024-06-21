import React from 'react';
import styled from 'styled-components';

const NotificationContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  background-color: #4caf50;
  color: white;
  padding: 32px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const Notification = ({ message }) => {
  return (
    <NotificationContainer>
      {message}
    </NotificationContainer>
  );
};

export default Notification;