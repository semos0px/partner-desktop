import { useEffect, useState } from "react";
import styled from "styled-components";
import base from "../../styles/constants/base";
import colors from "../../styles/constants/colors";
import typography from "../../styles/constants/typography";
import flexbox from "../../styles/func/flexbox";
import transition from "../../styles/func/transition";
import Slide from "./slide";
import chevronIcon from "../../assets/icon/page/chevron.svg";

// TODO: 자동슬라이드 구현해야함
const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: pink;
  ${flexbox()}
`;

const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
`;

const Cards = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  transform: ${({ idx }) => `translateX(-${idx * 100}%)`};
  transition: ${transition("transform")};
`;

const Index = styled.span`
  position: absolute;
  right: 20px;
  bottom: 20px;
  background-color: ${colors.white};
  padding: 5px 20px;
  border-radius: ${base.borderRadius}px;
  font-size: ${typography.size.small}px;
`;

const ButtonBox = styled.div`
  width: 95%;
  position: absolute;
  top: ${200 - 22}px;
  ${flexbox("space-between")}

  button:first-child {
    transform: rotate(90deg);

    img {
      transform: translateY(-4px);
    }
  }

  button:last-child {
    transform: rotate(-90deg);

    img {
      transform: translateY(-4px);
    }
  }
`;

const Button = styled.button`
  width: 44px;
  height: 44px;
  color: ${colors.white};
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(1px);
  font-size: 24px;
  transition: ${transition("opacity")};

  img {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg)
      brightness(102%) contrast(102%);
  }

  &:hover,
  &:active {
    opacity: 0.8;
  }
`;

const Carousel = ({ classImageList }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const TOTAL_SLIDES = classImageList.length - 1;

  const nextSlideHandler = () => {
    if (currentSlide < TOTAL_SLIDES) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlideHandler = () => {
    if (currentSlide !== 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <Container>
      <SlideContainer>
        <Cards idx={currentSlide}>
          {classImageList.map((image, idx) => (
            <Slide key={idx} img={image} />
          ))}
        </Cards>
      </SlideContainer>

      <Index>{currentSlide + 1} / 3</Index>

      <ButtonBox>
        <Button
          type="button"
          onClick={prevSlideHandler}
          isDisabled={currentSlide === 0 ? true : false}
        >
          <img src={chevronIcon} />
        </Button>
        <Button
          type="button"
          onClick={nextSlideHandler}
          isDisabled={currentSlide === TOTAL_SLIDES ? true : false}
        >
          <img src={chevronIcon} />
        </Button>
      </ButtonBox>
    </Container>
  );
};

export default Carousel;
