import { Link } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import MailTable from "../components/MailTable";

const MailContainer = styled.div`
  display: flex;
`;
const SidebarContainer = styled.div`
  flex: 1;
  height: 70vh;
`;
const TableContainer = styled.div`
  flex: 5;
`;

const Mail = () => {
  return (
    <MailContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <TableContainer>
        <MailTable />
      </TableContainer>
    </MailContainer>
  );
};

export default Mail;
