import { Link } from "react-router-dom";
import styled from "styled-components";
import sidebarImg from "../assets/sidebarImg.jpg";
import {
  Home,
  Timeline,
  Person,
  Assessment,
  Mail,
  Feedback,
  Message,
  BusinessCenter,
  Report,
} from "@material-ui/icons";

const SidebarContainer = styled.div`
  flex: 1;
  height: calc(100vh - 30px);
  background-image: url(${sidebarImg});
  position: sticky;
  top: 50px;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.205);
    border-radius: 17px;
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.521);
  }
`;
const SidebarWrapper = styled.div`
  padding: 20px;
  color: #555;
`;
const SidebarMenu = styled.div`
  margin-bottom: 10px;
`;
const SidebarTitle = styled.h3`
  font-size: 25px;
  color: rgb(73, 2, 46);
`;
const SidebarList = styled.ul`
  list-style: none;
  padding: 5px;
`;
const SidebarListItem = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  color: rgb(73, 2, 46);
  font-weight: bold;
`;
const SidebarIcon = styled.div`
  margin-right: 5px;
  font-size: 20px;
  color: rgb(73, 2, 46);
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarTitle>Dashboard</SidebarTitle>
          <SidebarList>
            <Link to="/" className="link">
              <SidebarListItem>
                <SidebarIcon>
                  <Home />
                </SidebarIcon>
                Home
              </SidebarListItem>
            </Link>
            <SidebarListItem>
              <SidebarIcon>
                <Timeline />
              </SidebarIcon>
              Analytics
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Quick Menu</SidebarTitle>
          <SidebarList>
            <Link to="/profile">
              <SidebarListItem>
                <SidebarIcon>
                  <Person />
                </SidebarIcon>
                My Profile
              </SidebarListItem>
            </Link>
            <SidebarListItem>
              <SidebarIcon>
                <Assessment />
              </SidebarIcon>
              Reports
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarTitle>Notification</SidebarTitle>
          <SidebarList>
            <SidebarListItem>
              <SidebarIcon>
                <Mail />
              </SidebarIcon>
              Inbox
            </SidebarListItem>

            <SidebarListItem>
              <SidebarIcon>
                <Message />
              </SidebarIcon>
              Compose
            </SidebarListItem>
            <SidebarListItem>
              <SidebarIcon>
                <Report />
              </SidebarIcon>
              Drafts
            </SidebarListItem>
            <SidebarListItem>
              <SidebarIcon>
                <Feedback />
              </SidebarIcon>
              Sent
            </SidebarListItem>
            <SidebarListItem>
              <SidebarIcon>
                <BusinessCenter />
              </SidebarIcon>
              Manage
            </SidebarListItem>
          </SidebarList>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
export default Sidebar;
