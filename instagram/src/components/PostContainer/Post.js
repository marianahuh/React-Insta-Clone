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
          scr={props.post.imageUrl} />
      </div>
      <CommentSection comments={props.post.comments} />
    </div>
  )
}

export default Post;