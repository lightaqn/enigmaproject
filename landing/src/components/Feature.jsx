import styled from "styled-components";

const FeatureContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
`;

const FeatureWrapper = styled.div`
  flex: 1;
  max-width: 180px;
  margin-right: 2rem;
`;
const FeatureWrapper1 = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;
const Line = styled.div`
  width: 40px;
  height: 3px;
  background: linear-gradient(89.97deg, #9350df 1.84%, #ee5706 102.67%);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.27);
  margin-bottom: 0.25rem;
`;
const H1 = styled.h1`
  color: #fff;
  letter-spacing: -0.04em;
  line-height: 30px;
  font-size: 25px;
  font-weight: 800;
  flex: 1;
`;
const Text = styled.p`
  color: #c980a2;
  flex: 2;
`;

const Feature = ({ title, text }) => {
  return (
    <FeatureContainer>
      <FeatureWrapper>
        <Line />
        <H1>{title}</H1>
      </FeatureWrapper>
      <FeatureWrapper1>
        <Text>{text}</Text>
      </FeatureWrapper1>
    </FeatureContainer>
  );
};

export default Feature;
