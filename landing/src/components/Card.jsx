import styled from "styled-components";
import { Link } from "react-router-dom";
import { posts } from "../data.js";

const Container = styled.div`
  width: 100%;
  padding: 10px 10px;
  -webkit-box-shadow: 5px 2px 7px -2px rgba(63, 4, 40, 0.19);
  box-shadow: 5px 2px 7px -2px rgba(78, 2, 2, 0.19);

  align-items: space-between;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  margin: 10px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: space-between;
  margin: 10px 5px;
`;
const Span = styled.span`
  font-weight: bold;
  font-size: 30px;
`;
const Image = styled.img`
  width: 100%;
  height: 170px;
  object-fit: cover;
  margin: 25px 0;
`;
const P = styled.p`
  color: #fff;
  margin-bottom: 15px;
  line-height: 20px;
  font-weight: bold;
  font-size: 22px;
`;
const Wrapper2 = styled.div`
  align-items: center;
  padding-top: 50px;
  padding-bottom: 15px;
  margin: 15px 15px;
  background-color: #31061f;
  border-radius: 10px;
  height: 100%;
  display: flex;
  justify-content: center;
  &:hover {
    transform: scale(0.8);
    transition: all 0.3s ease;
  }
`;
const P2 = styled.p`
  color: #fff;
  margin-bottom: 15px;
  line-height: 20px;
  font-weight: bold;
  font-size: 20px;
  margin-left: 5px;
`;

const Button2 = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #eb9cce;
  padding: 10px;
  color: #83024d;
  font-weight: bold;
  font-size: 15px;
  align-items: center;
  margin-left: 5px;
  justify-content: center;
  cursor: pointer;
`;
const Title = styled.h1`
  color: #eb9cce;
  align-items: space-between;
  justify-content: center;
  margin: 2px 45px;
`;
const Button = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #eb9cce;
  padding: 10px;
  color: #83024d;
  font-weight: bold;
  font-size: 15px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.3);
    transition: all 0.3s ease;
  }
`;

const Card = () => {
  const post = posts[0];
  const post1 = posts[2];
  const post2 = posts[1];

  return (
    <Container>
      <Wrapper>
        <Link to={`/post/${post.id}`}>
          <Span>{post.title}</Span>
          <Image src={post.img} alt="" />
          <P>{post.desc} ...</P>
          <Button>Read More</Button>
        </Link>

        <Link to={`/post/${post1.id}`}>
          <Span>{post1.title}</Span>
          <Image src={post1.img} alt="" />
          <P>{post1.desc} ...</P>
          <Button>Read More</Button>
        </Link>
      </Wrapper>
      <Wrapper2>
        <Link to={`/post/${post2.id}`}>
          <Title>{post2.title}</Title>
          <Image src={post2.img} alt="" />
          <P2>{post2.desc} ...</P2>
          <Button2>Read More</Button2>
        </Link>
      </Wrapper2>
    </Container>
  );
};

export default Card;
