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
import imageData from "./imageData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

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
