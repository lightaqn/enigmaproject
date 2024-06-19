import styled from "styled-components";

const Container = styled.div`
  background-color: #f098e0;
  margin-top: 400px;
`;
const Wrapper = styled.div`
  display: flex;
  padding: 15px;
  align-items: space-around;
  justify-content: center;
  cursor: pointer;
`;
const Text = styled.h1`
  color: #880738;
  align-items: space-around;
  margin: 0 10px;
  &:hover {
    transform: scale(0.9);
    transition: all 0.2s ease;
  }
`;

const Brands = () => {
  return (
    <Container>
      <Wrapper>
        <Text>Youtube</Text>
        <Text>Facebook</Text>
        <Text>Amalgam</Text>
        <Text>Gamechums</Text>
        <Text>CoffeeShack</Text>
      </Wrapper>
    </Container>
  );
};

export default Brands;
