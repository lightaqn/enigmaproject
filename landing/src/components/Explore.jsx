import styled from "styled-components";
import explore from "../assets/explore.jpg";

const Container = styled.div`
  background: var(--background-color);
  width: 100vw;
  display: flex;
  margin-top: 100px;
  margin-bottom: 100px;
  padding: 50px;
  padding-top: 300px;
  height: 40vh;
`;

const Wrapper = styled.div`
  opacity: 0.7;
  width: 1000px;
  height: 450px;
  object-fit: cover;
  margin-left: 10px;
  margin-bottom: 100px;
  width: 100vw;
  background-image: url(${explore});
  z-index: -1;
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

const Left = styled.div`
  margin-left: 10px;
  margin-right: 100px;
  margin-top: 50px;
  flex: 1;
  background-color: #fff;
  opacity: 0.5;
  width: 300px;
  height: 350px;
  z-index: 1;
  border-radius: 50%;
  flex-direction: row;
  display: flex;
  position: relative;
`;
const Line = styled.div`
  width: 50%;
  height: 4px;
  background: linear-gradient(89.97deg, #9350df 1.84%, #ee5706 102.67%);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.27);
  margin-bottom: 0.25rem;
  padding-top: 20px;
  border-radius: 5%;
`;

const Line2 = styled.div`
  width: 70px;
  height: 380px;
  background: linear-gradient(89.97deg, #9350df 1.84%, #ee5706 102.67%);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.27);
  margin-bottom: 0.25rem;
  padding-top: 20px;
  border-radius: 5%;
`;

const Right = styled.div`
  flex: 1;
  z-index: 1;
  margin-left: 70px;
  margin-right: 0px;
  margin-top: 70px;
  padding: 10px;
  flex: 1;
  background-color: #fff;
  width: 300px;
  height: 300px;
`;

const Scroll = styled.div`
  padding: 15px 15px;
  margin: 30px 70px;
  background-color: #0c0b0b;
  width: 550px;
  height: 300px;
  position: absolute;
  align-items: center;
  justify-content: center;
  z-index: 10;
  cursor: pointer;
`;
const PR = styled.p`
  color: #170350;
  font-weight: bold;
  font-size: 25px;
`;
const P = styled.p`
  color: #755eb4;
  font-weight: normal;
  line-height: 20px;
  font-size: 17px;
`;
const P3 = styled.p`
  color: #f3f1f8;
  font-weight: bold;
  line-height: 20px;
  font-size: 17px;
  display: inline-block;
`;

const Explore = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Scroll>
            <P3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              voluptates officia inventore? Expedita optio blanditiis, unde a
              eligendi quisquam quam vitae et illum dolorum obcaecati pariatur
              totam perspiciatis, ipsam hic nihil sequi minima incidunt impedit!
              Nesciunt cupiditate voluptates a fuga consequatur vel unde nemo
              fugit harum nostrum quidem dignissimos vero inventore quis ex
              voluptas, aspernatur perferendis maiores possimus repudiandae quae
              sint est laboriosam. Quae minima quam dolores
            </P3>
          </Scroll>
          <Line2 />
          <Line2 />
          <Line2 />
          <Line2 />
          <Line2 />
          <Line2 />
          <Line2 />
          <Line2 />
          <Line2 />
          <Line2 />
          <Line2 />
          <Line2 />
        </Left>
        <Right>
          <Line />
          <PR>Step into the infinite vastness of the universe</PR>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            voluptates officia inventore? Expedita optio blanditiis, unde a
            eligendi quisquam quam vitae et illum dolorum obcaecati pariatur
            totam perspiciatis, ipsam hic nihil sequi minima incidunt impedit!
            Nesciunt cupiditate voluptates a fuga consequatur vel unde nemo
            fugit harum nostrum quidem dignissimos vero inventore quis ex
            voluptas, aspernatur perferendis maiores possimus repudiandae quae
            sint est laboriosam. Quae minima quam dolores. Veritatis ab non quas
            provident aut! Quos, praesentium facere eligendi explicabo quae
            repellendus assumenda, ipsum nisi eos iste adipisci error officiis
            debitis quaerat fugiat vel quam voluptates architecto mollitia velit
            voluptatem magni. Voluptas rem nesciunt porro pariatur ducimus
            dolore delectus esse, maiores eveniet! Deserunt voluptatibus, quasi
            repellendus culpa laborum veritatis, qui hic optio nulla sed dicta!
            Eligendi eum aut veniam numquam praesentium ullam ducimus recusandae
            temporibus dolor, commodi enim voluptates architecto facilis culpa
            deserunt assumenda sunt voluptate est corporis excepturi itaque
            exercitationem debitis.
          </P>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Explore;
