import React from "react";
import { Container, Item, Img, Name, Category } from './styled/mainThema';

const ThemaItem = () => {
    return (
        <Container>
            <Item>
                <Img src="public/assets/adidas.webp" />
                <Name>Name 1</Name>
                <Category>Category 1</Category>
            </Item>
            <Item>
                <Img src="public/assets/adidas.webp"  />
                <Name>Name 2</Name>
                <Category>Category 2</Category>
            </Item>
            <Item>
                <Img src="public/assets/adidas.webp" />
                <Name>Name 3</Name>
                <Category>Category 3</Category>
            </Item>
            <Item>
                <Img src="public/assets/adidas.webp" />
                <Name>Name 4</Name>
                <Category>Category 4</Category>
            </Item>
            <Item>
                <Img src="public/assets/adidas.webp" />
                <Name>Name 5</Name>
                <Category>Category 5</Category>
            </Item>
        </Container>
    );
};

export default ThemaItem;
