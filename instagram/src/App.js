import React, { Component } from 'react';
import dummyData from './dummy-data';
import Comment from './components/CommentSection/Comment';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      state: [],
    };
  }

  render() {
    return (
      <div className='App'>
        <Comment comment={this.state.comment} />
      </div>
    )
  }
}


export default App;
