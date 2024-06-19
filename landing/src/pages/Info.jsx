import styled from "styled-components";
import InfoCard from "../components/InfoCard";

const Container = styled.div`
  width: 100vw;
  height: calc(100% - 20vh);
  z-index: 1;
`;
const LineJacket = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  border-radius: 10px;
  width: 100px;
  height: 70px;
`;

const Info = () => {
  return (
    <Container>
      <LineJacket>
        <InfoCard />
      </LineJacket>
    </Container>
  );
};

export default Info;
