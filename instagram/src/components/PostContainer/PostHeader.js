import React from 'react';

import './PostContainer.css';
import styled, { css } from 'styled-components';

const PostHeaderWrapper = styled.div
  `
  display: flex;
  padding: 10px;
`;

const PostThumbNail = styled.div
  `
  height: 30px;
  width: 30px;
`;

export const UserName = styled.div
  `
  font-weight: 600;
  font-size: 14px;
  padding-left: 9px;

  ${props =>
    props.bold &&
    css
      `
      font-weight: 600;
      font-size: 14px;
      padding: 6px;
    `};
`;

const PostHeader = props => {
  return (
    <PostHeaderWrapper>
      <PostThumbNail>
        <img
          className='post-thumbnail'
          src={props.thumbnailUrl}
          alt='post header'
        />
      </PostThumbNail>
      <UserName bold>{props.username}</UserName>
    </PostHeaderWrapper>
  );
};

export default PostHeader;