import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
    };
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      username: PropTypes.string
    })
  )
};

export default CommentSection;