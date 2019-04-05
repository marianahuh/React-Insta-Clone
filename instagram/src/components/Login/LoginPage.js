import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  inputChangeHandle = e =>
    this.setState({ [e.target.name]: e.target.value });

  loginSubmitHandle = () => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  };

  render() {
    return (
      <Form className='login-content'>
        <h1>Entering Insta Clone</h1>
        <h2>Username:</h2>
        <FormGroup>
          <Input className='input-field'
            placeholder='Enter Username'
            type='text'
            name='username'
            value={this.state.username}
            onChange={this.inputChangeHandle}
          />
        </FormGroup>
        <FormGroup>
          <h2>Password:</h2>
          <Input className='input-field'
            placeholder='Enter Password'
            type='password'
            name='password'
            value='{this.state.password}'
            onChange={this.inputChangeHandle}
          />
          <br />
          <Button color='success' size='lg' onClick={this.loginSubmitHandle}>
            Log In
          </Button>
        </FormGroup>
      </Form>
    );
  }
};

export default LoginPage;