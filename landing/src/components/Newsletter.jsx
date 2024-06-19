import styled from "styled-components";
import newsletter from "../assets/newsletter.png";
import applogo from "../assets/applogo.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 100px;
`;
const NewsContainer = styled.div`
  flex: 2;

  margin-top: 250px;
  margin-left: 40px;
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(39, 51, 89, 0.4);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 0, 0, 0.3);
`;
const Input = styled.input`
  margin-left: 30px;
  width: 90%;
  height: 60px;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  background: rgb(39, 51, 89, 0.4);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.637);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 0, 0, 0.13);
`;
const RightJacket = styled.div`
  flex-direction: column;
  align-items: space-between;
  margin-top: -40px;
  margin-right: 50px;
  margin-left: 20px;
  flex: 2;
`;

const LeftJacket = styled.div`
  flex: 3;
  flex-direction: column;
  align-items: space-between;
  margin-top: 40px;
  margin-right: 10px;
  margin-left: 20px;
`;

const CardContainer = styled.div`
  width: 450px;
  height: 300px;
  margin: 40px 0;

  z-index: 10;
  background-color: #8f89e2;
  background-image: radial-gradient(
      at 83% 67%,
      rgb(224, 152, 231) 0,
      transparent 57%
    ),
    radial-gradient(at 67% 20%, hsla(357, 93%, 71%, 1) 0, transparent 54%),
    radial-gradient(at 88% 35%, hsla(222, 81%, 63%, 1) 0, transparent 49%),
    radial-gradient(at 31% 91%, hsla(9, 57%, 61%, 1) 0, transparent 51%),
    radial-gradient(at 27% 71%, hsla(336, 90%, 65%, 1) 0, transparent 47%),
    radial-gradient(at 74% 89%, hsla(30, 96%, 64%, 1) 0, transparent 50%),
    radial-gradient(at 53% 75%, hsla(174, 94%, 67%, 1) 0, transparent 43%);
`;
const Title = styled.h1`
  font-size: 65px;
  margin-left: 80px;
  margin-bottom: 80px;
  align-items: center;
  justify-content: center;
  line-height: 60px;

  background-image: radial-gradient(
      at 6% 34%,
      hsla(0, 0%, 100%, 1) 0,
      transparent 57%
    ),
    radial-gradient(at 100% 60%, rgba(56, 8, 18, 0.589) 0, transparent 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const P = styled.p`
  color: #9590b1;
  margin-top: 15px;
  margin-bottom: 25px;
  font-size: 25px;
`;
const ImageJacket = styled.div`
  flex: 1;
  margin: 50px 20px;
  margin-top: 270px;
  padding-top: 50px;
`;
const Image = styled.img`
  width: 650px;
  height: 900px;
  margin: 20px 10px;
`;
const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin: 20px 10px;
  border-radius: 50%;
  background-color: #fff;
`;
const Text = styled.h2`
  font-size: 25px;
  color: #d2d1e0;
  margin: 0 80px;
  margin-top: 95px;
  align-items: center;
  justify-content: center;
`;

const Newsletter = () => {
  return (
    <Wrapper>
      <ImageJacket>
        <Image src={newsletter} alt="" />
      </ImageJacket>
      <NewsContainer>
        <LeftJacket>
          <Title>Newsletter</Title>
          <P>
            Sign up now for the delivery of latest newletters into your email
            about our product and services
          </P>
          <Input placeholder="Enter your email" />
        </LeftJacket>
        <RightJacket>
          <CardContainer>
            <Icon src={applogo} alt="" />
            <Text>Amalgam.ng</Text>
          </CardContainer>
          <CardContainer>
            <Icon src={applogo} alt="" />
            <Text>nftCENTRAL.ai</Text>
          </CardContainer>
          <CardContainer>
            <Icon src={applogo} alt="" />
          </CardContainer>
        </RightJacket>
      </NewsContainer>
    </Wrapper>
  );
};

export default Newsletter;
