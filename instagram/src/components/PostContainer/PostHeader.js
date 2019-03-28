import React from 'react';
import './Post.css';

const PostHeader = props => {
  return (
    <div className='post-header'>
      <div className='post-thumbnail-wrapper'>
        <img
          className='post-thumbnail'
          src={props.thumbnailUrl} />
      </div>
    </div>
  );
};

export default PostHeader;