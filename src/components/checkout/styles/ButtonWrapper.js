import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  margin: 0 auto;
  margin-top: 4rem;
  border-bottom: 1px solid #eee;
  border-radius: 10px;
  background: #97A6D9;
  color: #fff;
  cursor: pointer;
  width: 30%;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background: #7485BC;
    color: #ccc;
  }
`;

const PaymentOptionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  margin: 20px;
  border: 1px solid #7485BC;
  border-radius: 10px;
  cursor: pointer;
  transition: box-shadow 0.3s, transform 0.3s;

  &:hover,
  &:focus {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    outline: none;
    background: #f0f0f0;
  }
`;

export { PaymentOptionsWrapper, ButtonWrapper };
