import React, { Component } from 'react';

import dummyData from '../../dummy-data';
import PostContainter from './PostContainer';
import SearchBar from '../SearchBarContainer/SearchBar';
import './PostsPage.css';

class PostsPage extends Component {
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
      <div className='posts-page'>
        <SearchBar
          searchTerm={this.state.searchTerm}
          searchPosts={this.searchPostHandler}
        />
        <PostContainter
          posts={
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.posts
          }
        />
      </div>
    );
  }
}


export default PostsPage;