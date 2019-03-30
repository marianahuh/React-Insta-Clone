import React from 'react';

import './PostContainer.css';

const PostHeader = props => {
  return (
    <div className='post-header'>
      <div className='post-thumbnail-wrapper'>
        <img
          className='post-thumbnail'
          src={props.thumbnailUrl} />
      </div>
      <div className='post-username'>{props.username}</div>
    </div>
  );
};

export default PostHeader;