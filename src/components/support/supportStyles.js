import styled from "styled-components";

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    box-sizing: border-box;
    border: 1px solid #BDC9F2;
    border-radius: 4px;

    &:focus {
        outline: none;
        border-color: #7485BC;
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    padding: 10px;
    margin: 10px 0 20px 0;
    box-sizing: border-box;
    border: 1px solid #BDC9F2;
    border-radius: 4px;
    resize: none;

    &:focus {
        outline: none;
        border-color: #7485BC;
    }
`;

export const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #97A6D9;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-family: var(--font-nanumfont);

    &:hover {
        background-color: #7485BC;
    }
`;

export const Label = styled.label`
    display: block;
    margin-top: 10px;
    font-weight: bold;
`;
