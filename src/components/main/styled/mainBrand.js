import styled from 'styled-components';

export const ImgBtn = styled.button`
    background: transparent;
    margin: 0;
    cursor: pointer;
    border: none;

    img {
        width: 360px;
        height: 240px;
        border: 1px solid #333;
        object-fit: cover; 
    }
`;

export const EtcContainer = styled.div`
    width: 360px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5px 0 5px;

    span {
        color: #333;
        font-weight: bold;
        font-size: 16px;
        user-select: none;
    }
`;

export const AddtoWishlistButton = styled.button`
    background-color: #fff;
    color: #000;
    padding: 10px 10px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    width: 20px;
    height: 20px;

    & > svg {
        margin-right: 5px;
    }
`;

export const Container = styled.div`
    width: 1280px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    padding: 20px;
    overflow-y: auto;
    height: ${props => props.height || "auto"};
    transition: height 0.5s ease;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Wrapper = styled.div`
    width: calc(33.3333% - 20px);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
`;
