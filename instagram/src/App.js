import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainter from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBarContainer/SearchBar';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }

  render() {
    return (
      <div className='App'>
        <SearchBar />
        <PostContainter posts={this.state.posts} />
      </div>
    )
  }
}


export default App;
