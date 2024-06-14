import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 1280px;
`;

export const Brand = styled.div`
    img {
        width: 620px;
        height: 372px;
        object-fit: cover;
    }
`;

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 620px;
    justify-content: center;
    margin: 0 auto;
`;

export const Description = styled.div`
    margin-left: 40px;
    padding-bottom: 10px;
    color: #57638A;
    
    h2 {
    color: #0C0E46;
    }
`; //나중에 색이랑 글시체 넣을 예정

export const Products = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 20px;
`;

export const Product = styled.div`
    width: 180px;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`;

export const Pic = styled.div`
  width: 180px;
  height: 180px;
  background-size: cover;
  border: 1px solid #ccc;
  align-items: center;
`;

export const Name = styled.div`
    margin: 5px 0;
    font-size: 14px;
    color: #57638A;
`;//나중에 색이랑 글시체 넣을 예정

export const Price = styled.div`
    font-weight: bold;
    color: #0C0E46;
`;//나중에 색이랑 글시체 넣을 예정
