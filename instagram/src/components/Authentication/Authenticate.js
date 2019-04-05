import React from 'react';

// import SearchBar from '../SearchBarContainer/SearchBar';
import LoginPage from '../Login/LoginPage';
import PostsPage from '../PostContainer/PostsPage';


const Authenticate = PostsPage => LoginPage =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }
    componentDidMount() {
      if (!localStorage.getItem('user')) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    }
    render() {
      if (this.state.loggedIn) return <PostsPage />;
      return <LoginPage />
    }
  };


export default Authenticate;