import React from 'react';


const LikeSection = props => {
  return [
    <div key='likes-icons-container' onClick={props.incrementLike}>
      <div className='like-icon-wrapper'>
        <div className='like-icon'>
          <i class='fa fa-heart-o' />
        </div>
        <div className='like-icon'>
          <i class='fa fa-comment-o' />
        </div>
      </div>
      <div key='likes-container'>
        <div className='like-wrapper'>{props.likes} likes</div>
      </div>
    </div>
  ];
};

export default LikeSection;