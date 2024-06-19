import styled from "styled-components";
// import fb from "../assets/fb.png";
import git from "../assets/git.png";
import googl from "../assets/googl.png";
import { Link } from "react-router-dom";

const LoginContainer = styled.div`
  height: calc(100vh -100px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const LoginTitle = styled.h1`
  font-size: 40px;
  position: absolute;
  top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 350px;
  color: #83338a;
`;
const LoginWrapper = styled.div`
  width: 60%;
  height: 500px;
  -webkit-box-shadow: 0px 5px 33px rgba(75, 5, 75, 0.19);
  -moz-box-shadow: 0px 5px 33pxrgba (75, 5, 75, 0.19);
  box-shadow: 0px 5px 33px rgba(75, 5, 75, 0.19);
  display: flex;
  align-items: center;
  border-radius: 15px;
  position: relative;
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;
const LoginButton = styled.div`
  width: 190px;
  padding: 15px 25px;
  border-radius: 5px;
  color: white;
  margin: 5px 10px;
  border: 1px solid #f5a1d9;

  align-items: flex-start;
  display: inline-block;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: all 0.5s ease;
    background: rgba(255, 255, 255, 0.295);
    border-radius: 17px;
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.521);
  }
`;
const SmImage = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-right: 5px;
`;
const Center = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const Line = styled.div`
  width: 2px;
  height: 75%;
  background-color: #f780d3;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: -1;
`;
const CenterText = styled.div`
  border: 2px solid #f780d3;
  border-radius: 30px;
  padding: 10px;
  color: #8b034e;
  background-color: #f39ed2;
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  margin-top: 5px;
  background-color: #5e035ec8;
  color: #f3d9e8;
  height: 70px;
  padding: 5px;
  width: 170px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: bold;
  border: 1px solid rgba(255, 255, 255, 0.521);
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    transition: all 0.3s ease;
  }
`;
const Login = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };
  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };
  // const facebook = () => {
  //   window.open("http://localhost:5000/auth/facebook", "_self");
  // };

  return (
    <LoginContainer>
      <LoginWrapper>
        <LoginTitle>Select Preferred Login Method</LoginTitle>
        <Left>
          <LoginButton onClick={google}>
            <SmImage src={googl} alt="" />
            Google
          </LoginButton>
          {/* <LoginButton onClick={facebook}>
            <SmImage src={fb} alt="" />
            Facebook
          </LoginButton> */}
          <LoginButton onClick={github}>
            <SmImage src={git} alt="" />
            Github
          </LoginButton>
        </Left>
        <Center>
          <Line />
          <CenterText>OR</CenterText>
        </Center>
        <Right>
          {/* <Link to="/emaillogin">
            <Button> Sign In with Email </Button>
          </Link> */}
        </Right>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default Login;
