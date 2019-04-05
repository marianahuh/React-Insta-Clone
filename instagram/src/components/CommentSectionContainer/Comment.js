import React from 'react';
import PropTypes from 'prop-types';
import { UserName } from '../PostContainer/PostHeader';
import styled, { css } from 'styled-components';
import './Comment.css';

export const CommentWrapper = styled.div
  `
  display: flex;
  ${props =>
    props &&
    css
      `
      line-height: 14px
    `};
`;

const CommentContent = styled.p
  `
  text-align: left;
  line-height: 9px;
  padding: 1px;
  margin-left: 10px;
  font-weight: 300;
  font-size: 14px;
`;

const Comment = props => {
  return (
    <CommentWrapper>
      <UserName>{props.comment.username}</UserName>{' '}
      <CommentContent>{props.comment.text}</CommentContent>
    </CommentWrapper>
  )
}

Comment.propTypes = {
  comments: PropTypes.shape({
    text: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  })
};

export default Comment;