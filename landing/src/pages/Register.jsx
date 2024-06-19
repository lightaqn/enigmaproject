import styled from "styled-components";
import { emailRegister } from "../redux/apiMethods";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CheckBoxOutlineBlank, CheckBoxSharp } from "@material-ui/icons";

const RegisterContainer = styled.div`
  height: calc(100vh -100px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const RegisterTitle = styled.h1`
  font-size: 40px;
  position: absolute;
  top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 50px;
  color: #83338a;
`;
const RegisterWrapper = styled.div`
  width: 60%;
  height: 650px;
  -webkit-box-shadow: 0px 5px 33px rgba(75, 5, 75, 0.19);
  -moz-box-shadow: 0px 5px 33pxrgba (75, 5, 75, 0.19);
  box-shadow: 0px 5px 33px rgba(75, 5, 75, 0.19);
  display: flex;
  align-items: center;
  border-radius: 15px;
  position: relative;
  flex-direction: column;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  background-color: #f3c1eb;
  border-radius: 5px;
  margin-top: 5px;
  height: 50px;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  width: 250px;
  margin-bottom: 15px;
`;
const Button = styled.button`
  margin-top: 5px;
  background-color: #5e035e;
  color: #f3d9e8;
  height: 35px;
  padding: 5px;
  cursor: pointer;
  width: 70px;
  border-radius: 5px;
  border: none;
  &:hover {
    transform: scale(1.2);
    transition: all 0.3s ease;
  }
`;
const P = styled.p`
  font-size: 15px;
  color: #fff;
  font-weight: normal;
  margin-top: 17px;
`;
const PrivacyBox = styled.div`
  display: inline-block;
  flex-direction: row;
`;
const Span = styled.span`
  font-size: 15px;
  color: #c50a0a;
  font-weight: Bold;
  margin-top: 5px;
`;
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [checkBox, setCheckBox] = useState();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    emailRegister(dispatch, { username, email, password });
  };

  useEffect(() => {
    setCheckBox();
  }, []);

  return (
    <RegisterContainer>
      <RegisterWrapper>
        <RegisterTitle> Register</RegisterTitle>

        <InputContainer>
          <Input
            placeholder="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            placeholder="confirm password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* confirm password validator */}
          <PrivacyBox>
            {!checkBox ? <CheckBoxOutlineBlank /> : <CheckBoxSharp />}
            By creating an account, I agree to have read the
            <br />
            <b> PRIVACY Policy </b> and i consent to the processing of my
            personal data
            <br />
            <Link to="/Legal">
              <Span>Terms & Conditions</Span>
            </Link>
          </PrivacyBox>
        </InputContainer>

        {handleClick ? (
          <Button>Submit</Button>
        ) : (
          alert`check the privacy notice to continue`
        )}
        <P>
          Already have an account? click{" "}
          <Link to="/login" style={{ fontWeight: "bold", color: "purple" }}>
            here
          </Link>{" "}
          to sign in
        </P>
      </RegisterWrapper>
    </RegisterContainer>
  );
};
// implement confirm you are a human being feature
export default Register;
