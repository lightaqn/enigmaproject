import styled from "styled-components";
import pic1 from "../assets/pic1.jpg";
import logo2 from "../assets/logo2.png";
import { Link } from "react-router-dom";
import {
  Home,
  Info,
  Person,
  Duo,
  Email,
  BarChart,
  PhoneIphone,
  Code,
  Settings,
} from "@material-ui/icons";

const Container = styled.div`
  width: 100vw;
  height: 20vh;
  margin-bottom: 20px;
`;
const Wrapper = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  position: absolute;
  align-items: space-around;
  justify-content: space-around;
`;
const Logo = styled.span`
  padding: 15px 50px;
  align-items: space-around;
  justify-content: space-around;
  color: #f8f0f7;
  cursor: pointer;
  font-weight: bold;
  font-size: 60px;
  display: inline-block;
  flex-direction: row;
  flex-wrap: wrap;
  text-decoration: none;
  &:hover {
    color: #fa458a;
    transform: scale(1.1);
    transition: all 0.3s ease;
  }
`;
const Span = styled.span`
  color: #b32020;
`;
const Menu = styled.h1`
  display: flex;
  flex: 4;
  flex-wrap: wrap;
  flex-direction: row;
  font-family: var(--font-family);
  font-size: 18px;
  font-style: normal;
  font-weight: 450;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Access = styled.div`
  flex: 3;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: space-around;
`;
const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 0 5px;
  cursor: pointer;
  &:hover {
    transform: scale(1.3);
    transition: all 0.3s ease;
  }
`;
const Avatar = styled.div`
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    transform: scale(1.4);
    transition: all 0.3s ease;
  }
`;
const P = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #640439;
  margin-top: 30px;
  margin-left: 10px;
  margin-right: 5px;
`;
const LogoImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 40%;
  object-fit: cover;
  display: inline-block;
  background-color: #f71096;
  opacity: 0.9;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  display: inline-block;
`;
const SignIn = styled.h1`
  width: 90px;
  height: 50px;
  margin-top: 20px;
  margin-right: 10px;
  padding: 10px;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.295);
    border-radius: 17px;
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.521);
  }
`;
const Button = styled.button`
  width: 120px;
  height: 70px;
  padding: 10px 15px;
  border-radius: 5px;
  color: #500349;
  margin: 10px 10px;
  border: 1px solid #f5a1d9;
  background-color: #d46e6e;

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

const Register = styled.h1`
  margin-top: 5px;
  color: #fff;
  font-size: 20px;
`;

const Navbar = ({ user, emailuser }) => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Link to="/">
            <LogoImage src={logo2} alt="" /> theEnigma<Span>PROJECT</Span>
          </Link>
        </Logo>
        {user || emailuser ? (
          <>
            <Menu>
              <MenuItem>
                <Link to="/">
                  <Home />
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/info">
                  <Info />
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/profile">
                  <Person />
                </Link>
              </MenuItem>
              <MenuItem>
                <Duo />
              </MenuItem>
              <MenuItem>
                <Link to="/mail">
                  <Email />
                </Link>
              </MenuItem>
              <MenuItem>
                <PhoneIphone />
              </MenuItem>
              <MenuItem>
                <BarChart />
              </MenuItem>
              <MenuItem>
                <Code />
              </MenuItem>
              <MenuItem>
                <Settings />
              </MenuItem>
            </Menu>
            <Access>
              <Avatar>
                <Image src={user.photos[0].value} alt="" />
              </Avatar>
              <P>{user.displayName}</P>
              <SignIn onClick={logout}>Logout</SignIn>
            </Access>
          </>
        ) : (
          <>
            <SignIn>
              <Link to="login">Sign In</Link>
            </SignIn>
            <Button>
              <Link to="register">
                <Register>Register</Register>
              </Link>
            </Button>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default Navbar;
