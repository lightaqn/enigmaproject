import styled from "styled-components";
import { sliderUnits } from "../data.js";
import { useState } from "react";

const Container = styled.div`
  height: 40vh;
  position: relative;
  overflow: hidden;
  display: flex;
  padding-top: 200px;
  margin-top: 450px;
`;
const Arrow = styled.div`
  height: 50px;
  width: 50px;
  background-color: #d3d3d3;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  display: flex;
  margin: 10px 10px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: row;
  background-color: #f1c5e7;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  position: absolute;
`;
const Slide = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.Imgbg};
  opacity: 0.9;
`;
const ImageJacket = styled.div`
  height: 100%;
  width: 100%;
  flex-direction: row;
`;

const Image = styled.img`
  height: 95%;
  width: 50vw;
`;

const Text = styled.div`
  cursor: pointer;
  color: black;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(null);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : slideIndex + 1);
    } else {
      setSlideIndex(slideIndex < 8 ? slideIndex + 1 : slideIndex - 1);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <Text>click</Text>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderUnits.map((unit) => (
          <Slide key={unit.id}>
            <ImageJacket>
              <Image src={unit.img} />
            </ImageJacket>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <Text>click</Text>
      </Arrow>
    </Container>
  );
};

export default Slider;
