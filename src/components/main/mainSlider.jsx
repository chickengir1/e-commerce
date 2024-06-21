import React, { useEffect, useState } from "react";
import {
  SlideContainer,
  Image,
  SliderContainer,
  SliderWrapper,
  PrevButton,
  NextButton,
  ButtonContainer,
  PageIndicator,
} from "./styled/mainSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const imageData = [
  { src: '/assets/ads/slide1.png', bgColor: '#FDFBF7' },
  { src: '/assets/ads/slide2.png', bgColor: '#FEFAF6' },
  { src: '/assets/ads/slide3.png', bgColor: '#EDEBEE' },
  { src: '/assets/ads/slide4.png', bgColor: '#09ACEE' },
  { src: '/assets/ads/slide5.png', bgColor: '#FFFFFF' },
  { src: '/assets/ads/slide6.png', bgColor: '#F1F1F1' },
  { src: '/assets/ads/slide7.png', bgColor: '#C3D2A4' },
  { src: '/assets/ads/slide8.png', bgColor: '#FFFFFF' },
];

const Sliders = () => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentPage((currentPage) => (currentPage + 1) % imageData.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  const sliderStyle = {
    transform: `translateX(-${currentPage * 100}%)`,
  };

  const handlePrev = () => {
    setCurrentPage((currentPage) =>
      currentPage === 0 ? imageData.length - 1 : currentPage - 1
    );
  };

  const handleNext = () => {
    setCurrentPage((currentPage) => (currentPage + 1) % imageData.length);
  };

  return (
    <div>
      <SliderContainer>
        <SliderWrapper style={sliderStyle}>
          {imageData.map((image, index) => (
            <SlideContainer
              key={index}
              style={{ backgroundColor: image.bgColor }}
            >
              <Image src={image.src} alt={`slide-${index}`} />
            </SlideContainer>
          ))}
        </SliderWrapper>
      </SliderContainer>
      <ButtonContainer>
        <PrevButton onClick={handlePrev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </PrevButton>
        <PageIndicator>{currentPage + 1} / {imageData.length}</PageIndicator>
        <NextButton onClick={handleNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </NextButton>
      </ButtonContainer>
    </div>
  );
};

export default Sliders;
