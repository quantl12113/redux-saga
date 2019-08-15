import React from 'react';
import RegisterForm from '../../components/register-form';

export default class Register extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Register</h1><br />
        <RegisterForm />
      </div>
    )
  }
}