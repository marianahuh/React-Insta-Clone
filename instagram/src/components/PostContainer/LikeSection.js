import React from 'react';

const LikeSection = props => {
  return [
    <div className='like-section' key='likes-icons-container' onClick={props.incrementLike}>
      <div className='like-section-wrapper'>
        <i class='fa fa-heart-o' />
      </div>
      <div className='like-section-wrapper'>
        <i class='fa fa-comment-o' />
      </div>
      <div className='like-section' key='likes-container'>
        <div className='like-wrapper'>{props.likes}</div>
      </div>
    </div>
  ];
};

export default LikeSection;