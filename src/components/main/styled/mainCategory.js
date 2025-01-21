import styled from "styled-components";

export const ImgBtn = styled.div`
  background: transparent;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border: none;
  position: relative;

  &:hover {
    img {
      transform: scale(1.1);
      text-shadow: 2px 2px 0 #000, 3px 3px 0 #8690AE;
    }
    button {
      color: #EEF2FF;
      text-shadow: 2px 2px 0 #333, 3px 3px 0 #36436F;
      transform: scale(1.01);
    }
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 15px;
    padding: 10px;
    box-shadow: 0px 2px 6px rgba(134,144,174, 0.4);
    transition: transform 0.2s ease-in-out, width 0.2s ease-in-out, height 0.3s ease;
    position: absolute;
  }

  button {
    margin-top: 100px;
    letter-spacing: 1px;
    padding: 15px;
    border-radius: 5px;
    border: none;
    width: 140px;
    cursor: pointer;
    background: none;
    color: #333;
    transition: color 0.1s ease-in-out, text-shadow 0.1s ease-in-out,
      transform 0.1s ease-in-out;
  }
`;

export const Container = styled.div`
  width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  transition: transform 0.3s ease;
`;
