import styled from "styled-components";
import fb from "../assets/fb.png";
import git from "../assets/git.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import codepen from "../assets/codepen.png";
import kaggle from "../assets/kaggle.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: #1f0315;
  margin-top: 75vh;
  margin-bottom: 1px;
  width: 100vw;
  height: 40vh;
  display: flex;
  flex-direction: row;
`;
const LeftWrapper = styled.div`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  margin: 10px 5px;
  flex: 1;
`;
const RightWrapper = styled.div`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  margin: 10px 5px;
  flex: 1;
`;
const Line = styled.div`
  width: 50vw;
  height: 5px;
  background: linear-gradient(89.97deg, #9350df 1.84%, #ee5706 102.67%);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.27);
  margin-bottom: 0.25rem;
`;
const Line2 = styled.div`
  width: 50vw;
  height: 5px;
  background: linear-gradient(89.97deg, #9350df 1.84%, #ee5706 102.67%);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.27);
  margin-top: 0.25rem;
`;
const Text = styled.h1`
  color: #fcf7f7;

  align-items: center;
  justify-content: center;
  margin: 20px 10px;
  flex: 1;
`;
const Text2 = styled.h3`
  color: #fcf7f7;
  font-size: 20px;
  line-height: 24px;
  align-items: center;
  justify-content: center;
  margin: 20px 10px;
  flex: 1;
`;
const P = styled.p`
  color: #fff;
  margin-top: 10px;
`;
const P2 = styled.p`
  color: #e49696;
  margin-top: 10px;
  margin-left: 5px;
  font-size: 15px;
`;
const Span = styled.span`
  color: #f80404;
`;
const Icon = styled.img`
  width: 30px;
  height: 30px;
  padding: 1px 2px;
  margin: 10px 5px;
  border-radius: 50%;
`;
const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const Footer = () => {
  return (
    <Container>
      <LeftWrapper>
        <Line />
        <Text>
          theEnigma<Span>PROJECT</Span>
        </Text>
        <Text2>
          <P>Support</P>
          <P>Privacy</P>
          <P>Terms and Conditions</P>
          <Link to="/Legal">
            <P>Legal</P>
          </Link>
        </Text2>
        <IconWrapper>
          <Icon src={fb} alt="" />
          <Icon src={git} alt="" />
          <Icon src={instagram} alt="" />
          <Icon src={youtube} alt="" />
          <Icon src={codepen} alt="" />
          <Icon src={kaggle} alt="" />
        </IconWrapper>
      </LeftWrapper>
      <RightWrapper>
        <Text2>
          <P>Developers</P>
          <P>Collaborations</P>
          <P>Sitemap</P>
        </Text2>
        <Text2>
          <P>Contact us</P>
          <P2>services.theenigmaproject@gmail.com</P2>
          <P2>support@theenigmaproject.com</P2>
          <P>Sponsorship Info</P>
          <P>Careers</P>
          <P>Help</P>
        </Text2>
        <Line2 />

        <P>Copyright (C) 2022 theEnigmaPROJECT</P>
      </RightWrapper>
    </Container>
  );
};

export default Footer;
