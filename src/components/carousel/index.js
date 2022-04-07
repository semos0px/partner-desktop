import { useEffect, useState } from "react";
import styled from "styled-components";
import colors from "../../styles/constants/colors";
import flexbox from "../../styles/func/flexbox";
import transition from "../../styles/func/transition";
import Slide from "./slide";

// TODO: 자동슬라이드 구현해야함
const Container = styled.div`
  width: 100%;
  ${flexbox()}
  position: relative;
  margin-top: 30px;
`;

const SlideContainer = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
`;

const Cards = styled.ul`
  width: 100%;
  display: flex;
  transform: ${({ idx }) => `translateX(-${idx * 100}%)`};
  transition: ${transition("transform")};
`;

const ButtonBox = styled.div`
  width: 100%;
  position: absolute;
  ${flexbox("space-between")}
`;

const Button = styled.button`
  width: 44px;
  height: 44px;
  background-color: ${colors.white};
  border-radius: 15px;
  color: ${colors.violet};
  font-size: 24px;
  transition: ${transition("opacity")};

  &:hover,
  &:active {
    opacity: 0.8;
  }
`;

const Carousel = ({ classImageList }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const TOTAL_SLIDES = classImageList.length - 1;

  //   const nextSlideHandler = () => {
  //     if (currentSlide < TOTAL_SLIDES) {
  //       setCurrentSlide(currentSlide + 1);
  //     }
  //   };

  //   const prevSlideHandler = () => {
  //     if (currentSlide !== 0) {
  //       setCurrentSlide(currentSlide - 1);
  //     }
  //   };

  return (
    <Container>
      <SlideContainer>
        <Cards idx={currentSlide}>
          {classImageList.map((image, idx) => (
            <Slide key={idx} img={image} />
          ))}
        </Cards>
      </SlideContainer>

      {/* <ButtonBox>
        <Button
          type="button"
          onClick={prevSlideHandler}
          isDisabled={currentSlide === 0 ? true : false}
        >
          &lt;
        </Button>
        <Button
          type="button"
          onClick={nextSlideHandler}
          isDisabled={currentSlide === TOTAL_SLIDES ? true : false}
        >
          &gt;
        </Button>
      </ButtonBox> */}
    </Container>
  );
};

export default Carousel;
