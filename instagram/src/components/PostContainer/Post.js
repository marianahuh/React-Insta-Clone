import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSectionContainer/CommentSection';

const Post = props => {
  return (
    <div className='post-border'>
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl} />
      <div className='post-img-container'>
        <img
          className='post-img'
          src={props.post.imageUrl}
          alt='post thumbnail'
        />
      </div>
      <CommentSection comments={props.post.comments} />
    </div>
  )
}

export default Post;