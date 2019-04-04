import React from 'react';
import './Login.css';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // content: props.content,
      username: '',
      password: ''
    }
  }
  inputChangeHandle = e =>
    this.setState({ [e.target.name]: e.target.value });

  loginSubmit = () => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  };

  render() {
    return (
      <div className='login-content'>
        <h2>Username:</h2>
        <input className='login-username'
          placeholder='Enter Username'
          type='text'
          name='username'
          value={this.state.username}
          onChange={this.inputChangeHandle}>
        </input>
        <h2>Password:</h2>
        <input className='login-password'
          placeholder='Enter Password'
          type='password'
          name='password'
          value='{this.state.password}'
          onChange={this.inputChangeHandle}>
        </input>
        <div className='login-btn'>
          <button onClick={this.loginSubmit}>Log In</button>
        </div>
      </div>
    );
  }
};

export default LoginPage;