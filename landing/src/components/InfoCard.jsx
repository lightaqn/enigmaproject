import styled from "styled-components";
import { Link } from "react-router-dom";
import { infoPosts } from "../data.js";

const Container = styled.div`
  width: 100%;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  z-index: 2;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 270px;
  object-fit: cover;
  margin: 10px 0px;
`;

const Wrapper = styled.div`
  align-items: center;
  padding-top: 10px;
  padding-bottom: 15px;
  margin: 10px 250px;
  background-color: #31061f;
  border-radius: 10px;
  height: 70vh;
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  -webkit-box-shadow: 5px 2px 7px -2px rgba(63, 4, 40, 0.19);
  box-shadow: 5px 2px 7px -2px rgba(78, 2, 2, 0.19);

  &:hover {
    transform: scale(1.05);
    transition: all 0.5s ease;
  }
`;
const P = styled.p`
  color: #fff;
  margin-bottom: 15px;
  line-height: 20px;
  font-weight: bold;
  font-size: 20px;
  margin-left: 5px;
`;

const Title = styled.h1`
  color: #eb9cce;
  align-items: center;
  justify-content: center;
  margin: 2px 250px;
`;

const Card = () => {
  const post2 = infoPosts[1];

  return (
    <Container>
      <Wrapper>
        <Link to={`/post/${post2.id}`} onClick={() => {}}>
          <Title>{post2.title}</Title>
          <Image src={post2.img} alt="" />
          <P>{post2.desc} ...</P>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Card;
