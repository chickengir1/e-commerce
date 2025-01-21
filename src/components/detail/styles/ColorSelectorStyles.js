import styled from "styled-components";

export const ColorSelectorStyled = styled.div`
  margin-bottom: 20px;
`;

export const QuantitySelectorStyled = styled.div`
  margin-bottom: 20px;

  label {
    font-size: 16px;
    display: block;
    margin-bottom: 5px;
  }

  .quantity-control {
    display: flex;
    align-items: center;

    button {
      background-color: transparent;
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      width: 50%;
      font-size: 20px;
      color: #131b36;
      cursor: pointer;
      transition: background 0.3s ease;

      &:hover {
        background-color: transparent;
      }
    }

    input {
      text-align: center;
      border: 1px solid #a3b0dc;
      width: 100%;
      height: 2.5rem;
      padding-left: 15px;
      font-size: 20px;
      margin: 0 10px;
      pointer-events: none;
    }
  }
`;
