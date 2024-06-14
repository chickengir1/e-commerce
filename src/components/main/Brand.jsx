import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { ImgBtn, EtcContainer, Wrapper, AddtoWishlistButton, Container } from './styled/mainBrand';

function Brand() {
    const images = [
        { id: 1, src: "/public/assets/adidas.webp" },
        { id: 2, src: "/public/assets/apple.webp" },
        { id: 3, src: "/public/assets/adidas.webp" },
    ];

    const brands = [
        "나이키",
        "아디다스",
        "퓨마",
    ];

    const [containerHeight, setContainerHeight] = useState('450px');
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setContainerHeight('auto');
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    if (!images || !brands || images.length === 0 || brands.length === 0) {
        return <div>데이터 없음</div>;
    }

    const WishlistButton = ({ children, onClick }) => (
        <AddtoWishlistButton onClick={onClick}>
            <FontAwesomeIcon icon={faHeart} />
            {children}
        </AddtoWishlistButton>
    );

    const ImageBtn = ({ imgSrc, brand }) => (
        <Wrapper>
            <ImgBtn>
                <img src={imgSrc} alt={brand} />
            </ImgBtn>
            <EtcContainer>
                <span>{brand}</span>
                <WishlistButton />
            </EtcContainer>
        </Wrapper>
    );

    return (
        <Container height={containerHeight} ref={containerRef}>
            {images.map((image, index) => (
                <ImageBtn
                    key={image.id}
                    imgSrc={image.src}
                    brand={brands[index]}
                />
            ))}
        </Container>
    );
}

export default Brand;
