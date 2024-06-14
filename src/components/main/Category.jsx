import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, ImgBtn } from './styled/mainCategory';
import useFetchData from '../../hook/useFetchData';

function Category() {
    const CategoryUrl = `/api/category`;
    const { data, loading, error } = useFetchData(CategoryUrl);

   // console.log(data);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const images = [
        "/public/assets/men-top.webp",
        "/public/assets/men-pants.webp",
        "/public/assets/women-top.webp",
        "/public/assets/women-pants.webp",
    ];

    const ImageBtn = ({ imgSrc, category }) => {
        const navigate = useNavigate();

        const handleClick = () => {
            navigate(`/products/${category.name}`);
        };

        return (
            <ImgBtn onClick={handleClick}>
                <img src={imgSrc} alt={category.name} />
                <button style={{ fontSize: "24px", fontWeight: "bold" }}>{category.name}</button>
            </ImgBtn>
        );
    };

    return (
        <div>
            <Container>
                {data.map((category, index) => (
                    <ImageBtn key={category._id} imgSrc={images[index]} category={category} />
                ))}
            </Container>
        </div>
    );
}

export default Category;
