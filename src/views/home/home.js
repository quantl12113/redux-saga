import React from 'react';
import { Button } from 'react-bootstrap';

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { email } = this.props;
    return (
      <div className="container">
        <h1>Home</h1><br />
        <h1>Email: {email}</h1><br />
        <Button type="submit" >Signout</Button>
      </div>
    )
  }
}