import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import ListItem from '../../components/list-item'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
    const { logout } = this.props;
    logout();
  }

  componentDidMount() {
    const { loadData } = this.props;
    loadData();
  }

  render() {
    const { email, data, } = this.props;
    if (!email) {
      return <Redirect to='/login' />
    }

    return (
      <div className="container">
        <h1>Home</h1><br />
        https://github.com/quantl12113/redux-saga.githttps://github.com/quantl12113/redux-saga.git
        <h1>Email: {email}</h1><br />
        <ListItem data={data} />
        <Button type="submit" onClick={this.onLogout}>Signout</Button>
      </div>
    )
  }
}