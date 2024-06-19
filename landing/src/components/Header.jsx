import styled from "styled-components";
import logo from "../assets/logo.jpg";
import pic2 from "../assets/pic2.jpg";
import Card from "./Card";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Wrapper = styled.div`
  width: 800px;
  height: 600px;
  left: 80px;
  top: 105px;
  background: #e4aefa;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 30%;
`;

const HeaderLeft = styled.div`
  flex: 1;
  border-radius: 50%;
`;

const HeaderRight = styled.div`
  flex: 2;
  color: #880738;

  margin: 0 50px;
  position: absolute;
`;

const Image = styled.img`
  margin-top: 170px;
  border-radius: 50%;
  opacity: 0.3;
`;
const Text = styled.h1`
  font-style: normal;
  font-weight: 550;
  font-size: 70px;
  line-height: 63px;
  width: 100%;
  margin-top: 10px;
`;
const P = styled.p`
  font-size: 40px;
  font-weight: bold;
`;
const LineJacket = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  border-radius: 10px;
  width: 100px;
  height: 70px;
`;
const Line = styled.div`
  object-fit: cover;
  flex: 1;
  width: 50vw;
  height: 50vh;
  background-color: #880738;
  align-items: center;
  justify-content: center;
  color: #fff;
  display: inline-block;
  z-index: 1;
  opacity: 0.8;
  border-radius: 10px;
  margin-top: 20px;
`;
const Right = styled.div`
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 400px;
  height: 300px;
  left: 80px;
  top: 105px;
  background: #cd5ff8;
  opacity: 0.5;
  align-items: center;
  justify-content: center;
  color: #58034a;
  border-radius: 30%;
  margin-right: 400px;
  font-size: 40px;
`;
const ImageRight = styled.img`
  z-index: -1;
  border-radius: 50%;
  width: 900px;
  height: 600px;
  flex-wrap: wrap;
  opacity: 0.3;
`;

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <HeaderLeft>
          <Image src={logo} />
        </HeaderLeft>

        <HeaderRight>
          <Text>WHAT WE DO?</Text>
          <P>
            We are invested in connecting software growers and data dissecters
            in the most organic way. An avenue to share codes, collaborate and
            work on the next generation products in the most seamless way
            possible.
          </P>
        </HeaderRight>
      </Wrapper>
      <LineJacket>
        <Line>
          <Card style={{ width: "100%" }} />
        </Line>
      </LineJacket>
      <Right>
        <Text style={{ opacity: 0.3 }}>GUARANTEED SATISFACTION</Text>
        <ImageRight src={pic2} />
        <Text>GUARANTEED SATISFACTION</Text>
      </Right>
    </Container>
  );
};

export default Header;
