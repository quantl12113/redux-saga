import React from 'react';
import LoginForm from '../../components/login-form';
import { Button } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';

export default class Login extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { login, email } = this.props;
    console.info(email)
    if (email) {
      return <Redirect to='/' />
    }
    return (
      <div className="container">
        <h1>Login</h1><br />
        <LoginForm signin={login} /><br />
        <Link to='/register'>
          <Button>Register</Button>
        </Link>
      </div>
    )
  }
}