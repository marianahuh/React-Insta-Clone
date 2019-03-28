import React from 'react';

const PostContainer = props => {
  return (
    <div>
      {props.post.map(p => <Post key={p.id} post={p} />)}
    </div>
  );
};

export default PostContainer;