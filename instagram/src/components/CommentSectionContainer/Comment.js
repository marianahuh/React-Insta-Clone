import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = props => {
  return (
    <div className='comment-text'>
      <span className='comment'>{props.comment.text}</span>{' '}
      <span className='user'>-{props.comment.username}</span>
    </div>
  )
}

Comment.propTypes = {
  comments: PropTypes.shape({
    text: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  })
};

export default Comment;