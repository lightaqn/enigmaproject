import styled from "styled-components";
import Feature from "./Feature";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #5e033f;
  padding: 0 10px;
  margin-top: 100px;
  margin-bottom: 100px;
  margin-left: 90px;
  margin-right: 30px;
  width: 1850px;
  height: 550px;
  position: relative;
  align-items: flex-start;
  justify-content: flex-start;
  -webkit-box-shadow: 5px 2px 7px 2px rgba(126, 3, 79, 0.29);
  box-shadow: 5px 2px 7px 2px rgba(73, 11, 11, 0.49);
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 10px;
  padding: 10px;
  margin-top: 30px;
`;
const Wrapper1 = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-top: 2rem;
  margin-left: 10px;
  align-items: space-around;
  justify-content: space-around;
`;
const FeatureWrapper1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 5px 5px;
`;

const Text = styled.h1`
  color: #cf6767;
  margin: 5px 10px;
  max-width: 700px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0 2rem;
  font-size: 45px;
`;

const Nextfrontier = () => {
  return (
    <Container>
      <Wrapper>
        <Feature
          title="What is Next"
          text="You can always expect the absolute best in terms of top performance in the quality of products we will be putting out in the next couple of weeks from webinars, trips and projects designed to make this a great and exciting time for all and sundry "
        />
      </Wrapper>
      <Wrapper>
        <Text>Stay tuned for exciting products coming from our stables</Text>
      </Wrapper>
      <Wrapper1>
        <FeatureWrapper1>
          <Feature
            style={{ flexDirection: "column" }}
            title="Webinars"
            text="You can always expect the absolute best in terms of top performance in the quality of products we will be putting out in the next couple of weeks"
          />
        </FeatureWrapper1>
        <FeatureWrapper1>
          <Feature
            style={{ flexDirection: "column" }}
            title="Tour"
            text="You can always expect the absolute best in terms of top performance in the quality of products we will be putting out in the next couple of weeks"
          />
        </FeatureWrapper1>
        <FeatureWrapper1>
          <Feature
            style={{ flexDirection: "column" }}
            title="Hackathon"
            text="You can always expect the absolute best in terms of top performance in the quality of products we will be putting out in the next couple of weeks"
          />
        </FeatureWrapper1>
      </Wrapper1>
    </Container>
  );
};

export default Nextfrontier;
