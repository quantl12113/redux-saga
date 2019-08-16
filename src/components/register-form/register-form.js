import React from 'react';
import { Form, Button } from 'react-bootstrap';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      username: "",
    }
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleChangeUsername(event) {
    this.setState({ username: event.target.value });
  }

  handleSubmit(event) {
    const { email, password, username } = this.state;
    const { register } = this.props;
    console.info(register)
    register({ email, password, username });
    event.preventDefault();
  }

  render() {
    const { register } = this.props;
    console.info(this.props)
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.handleChangeEmail} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={this.state.password} onChange={this.handleChangePassword} />
        </Form.Group>

        <Form.Group controlId="formBasicName">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" value={this.state.username} onChange={this.handleChangeUsername} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
  }
}

export default RegisterForm;