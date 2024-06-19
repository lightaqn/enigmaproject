import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  PermIdentity,
  Event,
  PhoneAndroid,
  MailOutline,
  LocationOn,
  AddOutlined,
  PublishTwoTone,
} from "@material-ui/icons";
import pic1 from "../assets/pic1.jpg";

const Container = styled.div`
  height: 95vh;
  width: 95vw;
  margin-left: 20px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  padding: 20px;

  background: rgb(39, 51, 89, 0.4);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.212);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 0, 0, 0.199);
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ProfileTitle = styled.h1`
  color: #fff;
  font-weight: 600;
  font-size: 30px;
  margin: 10px 70px;
`;
const Button = styled.button`
    font-family: var(--font-family);
    font-size: 12px;
    padding: 12px 10px;
    margin: 1rem;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    border-color: #fff 10px solid
    border-radius: 30px;
    background-color: var(--background-color);
    transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
    transition: all 0.3s ease;
  }
`;
const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;
const ProfileDisplay = styled.div`
  flex: 1;
  padding: 20px;

  margin-left: 20px;
  border-radius: 10%;
`;
const ProfileDisplayTop = styled.div`
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
`;
const ProfileDisplayTopTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const ProfileDisplayUsername = styled.span`
  font-weight: 620;
  font-size: 40px;
`;
const ProfileDisplayUserTitle = styled.span`
  font-weight: 310;
  font-size: 25px;
  color: rgb(232, 240, 241);
`;
const ProfileDisplayBottom = styled.div`
  margin-top: 25px;
`;
const ProfileDisplayTitle = styled.span`
  font-style: 14px;
  font-weight: 500;
  color: rgb(200, 205, 212);
`;
const ProfileDisplayInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  color: rgb(80, 2, 60);
`;
const ProfileDisplayInfoTitle = styled.span`
  margin-left: 10px;
`;
const ProfileEditForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;
const ProfileEditLeft = styled.div``;

const ProfileEditItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
const Label = styled.label`
  margin-bottom: 5px;
  font-style: 15px;
  justify-content: center;
  align-items: center;
  color: #530346;
`;
const Input = styled.input`
  border: none;
  width: 250px;
  height: 30px;
  border-bottom: 1px solid rgb(255, 167, 3);
  align-items: center;
  justify-content: center;
  border-radius: 5%;
  background-color: rgb(201, 153, 218);
`;
const ProfileEditRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ProfileEdit = styled.div`
  flex: 1;
  margin: 0 40px;
`;
const ProfileEditUpload = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    transform: scale(1.2);
    transition: all 0.3s ease;
  }
`;
const Profile = () => {
  return (
    <Container>
      <Wrapper>
        <ProfileTitle>Edit Profile Information</ProfileTitle>
        <Link to="/register">
          <Button>Create</Button>
        </Link>
      </Wrapper>

      <ProfileContainer>
        <ProfileDisplay>
          <ProfileDisplayTop>
            <Image src={pic1} alt="" />
            <ProfileDisplayTopTitle>
              <ProfileDisplayUsername>Abcd Efgh</ProfileDisplayUsername>
              <ProfileDisplayUserTitle>
                Software Engineer
              </ProfileDisplayUserTitle>
            </ProfileDisplayTopTitle>
          </ProfileDisplayTop>

          <ProfileDisplayBottom>
            <ProfileDisplayTitle>Account Details</ProfileDisplayTitle>
            <ProfileDisplayInfo>
              <PermIdentity />
              <ProfileDisplayInfoTitle>abcdefgh13</ProfileDisplayInfoTitle>
            </ProfileDisplayInfo>
            <ProfileDisplayInfo>
              <Event />
              <ProfileDisplayInfoTitle>1.11.2000</ProfileDisplayInfoTitle>
            </ProfileDisplayInfo>

            <ProfileDisplayTitle>Contact Details</ProfileDisplayTitle>

            <ProfileDisplayInfo>
              <PhoneAndroid />
              <ProfileDisplayInfoTitle>+1 234 567 880</ProfileDisplayInfoTitle>
            </ProfileDisplayInfo>
            <ProfileDisplayInfo>
              <MailOutline />
              <ProfileDisplayInfoTitle>
                abcdefgh13@enigmaproject.com
              </ProfileDisplayInfoTitle>
            </ProfileDisplayInfo>
            <ProfileDisplayInfo>
              <LocationOn />
              <ProfileDisplayInfoTitle>
                North Pole | Earth
              </ProfileDisplayInfoTitle>
            </ProfileDisplayInfo>
          </ProfileDisplayBottom>
        </ProfileDisplay>
        <ProfileEdit>
          <ProfileEditForm>
            <AddOutlined />
            <ProfileEditLeft>
              <ProfileEditItem>
                <Label>Full Name</Label>
                <Input type="text" placeholder="Abcd Efgh" />
              </ProfileEditItem>
              <ProfileEditItem>
                <Label>Username</Label>
                <Input type="text" placeholder="abcdefgh13" />
              </ProfileEditItem>
              <ProfileEditItem>
                <Label>Email</Label>
                <Input type="text" placeholder="abcdefgh13@enigmaproject.com" />
              </ProfileEditItem>
              <ProfileEditItem>
                <Label>Phone</Label>
                <Input type="text" placeholder="+1 234 567 880" />
              </ProfileEditItem>

              <ProfileEditItem>
                <Label>Address</Label>
                <Input type="text" placeholder="North Pole | Earth" />
              </ProfileEditItem>
            </ProfileEditLeft>
            <ProfileEditRight>
              <ProfileEditUpload>
                <Image src={pic1} alt="" />
                <Label htmlFor="file">
                  <PublishTwoTone style={{ cursor: "pointer" }} />
                </Label>
                <Input type="file" id="file" style={{ display: "none" }} />
              </ProfileEditUpload>
              <Button>Update</Button>
            </ProfileEditRight>
          </ProfileEditForm>
        </ProfileEdit>
      </ProfileContainer>
    </Container>
  );
};

export default Profile;
