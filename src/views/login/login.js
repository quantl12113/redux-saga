import React from 'react';
import LoginForm from '../../components/login-form';

export default class Login extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { login } = this.props;
    return (
      <div className="container">
        <h1>Login</h1><br />
        <LoginForm signin={login} />
      </div>
    )
  }
}