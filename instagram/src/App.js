import React, { Component } from 'react';

import dummyData from './dummy-data';
import PostContainter from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBarContainer/SearchBar';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  searchPostHandler = e => {
    const posts = this.state.posts.filter(p => {
      if (p.username.includes(e.target.value)) {
        return p;
      }
    });
    this.setState({ filteredPosts: posts });
  };

  render() {
    return (
      <div className='App'>
        <SearchBar
          searchTerm={this.state.searchTerm}
          searchPosts={this.searchPostHandler}
        />
        <PostContainter
          posts={
            this.state.filteredPosts.length > 0 ? this.state.filteredPosts :
              this.state.posts
          }
        />
      </div>
    );
  }
}


export default App;
