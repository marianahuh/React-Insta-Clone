import React from 'react';

const CommentInput = props => {
  return (
    <form onSubmit={props.submitComment}>
      <input className='addComment'
        type='text'
        placeholder='Add a comment...'
        value={props.comment}
        onChange={props.changeComment}
      />
    </form>
  );
};

export default CommentInput;