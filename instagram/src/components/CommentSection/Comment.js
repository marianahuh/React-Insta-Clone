import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
  return (
    <div>
      <p>{props.comment.text}</p>
      <p>{props.comment.username}</p>
    </div>
  );
};

Comment.PropTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  })
};

export default Comment;