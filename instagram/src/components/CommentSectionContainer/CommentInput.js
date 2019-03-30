import React from 'react';

const CommentInput = props => {
  return (
    <form>
      <input className='addComment' type='text' placeholder='Add  a comment...' />
    </form>
  )
}

export default CommentInput;