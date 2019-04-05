import React from 'react';
import Post from './Post';
import './PostContainer.css';
import styled from 'styled-components';

const PostWrapper = styled.div
  `
  height: 50%;
  width: 55%;
  min-width: 300px;
  margin: 5px auto;
`;

const PostContainer = props => {
  return (
    <PostWrapper>
      {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
    </PostWrapper>
  );
};

export default PostContainer;