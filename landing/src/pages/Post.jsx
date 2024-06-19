import styled from "styled-components";
import { posts } from "../data.js";
import { useLocation } from "react-router";

const PostContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const PostImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  margin-bottom: 25px;
`;
const PostTitle = styled.h1``;
const PostDesc = styled.p`
  padding: 0 100px;
  font-size: 27px;
  font-weight: 350;
  color: grey;
  margin-top: 60px;
`;
const PostFullDesc = styled.p`
  padding: 100px;
  padding-top: 40px;
  font-size: 20px;
  line-height: 25px;
`;

const Post = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const post = posts.find((p) => p.id.toString() === path);
  return (
    <PostContainer>
      <PostImage src={post.img} alt="" />
      <PostTitle>{post.title}</PostTitle>
      <PostDesc>{post.desc}</PostDesc>
      <PostFullDesc>{post.fulldesc}</PostFullDesc>
    </PostContainer>
  );
};

export default Post;
