import React from 'react';
import { Table, Button } from 'react-bootstrap';
import DetailModal from './modal'

export default class ListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      modalShow: false
    })
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({
      modalShow: true,
    })
  }

  hideModal() {
    this.setState({
      modalShow: false,
    })
  }

  render() {
    const { data } = this.props;
    const { modalShow } = this.state;
    return (
      <div className="table">
        <h1>Table user</h1>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data && data.map(item => {
                return (
                  <React.Fragment key={item.id}>
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.username}</td>
                      <td>{item.email}</td>
                      <td><Button onClick={this.showModal}>Detail</Button></td>
                    </tr>
                    <DetailModal user={item} show={modalShow} onHide={this.hideModal} />
                  </React.Fragment>
                )
              })
            }
          </tbody>
        </Table>
      </div>
    )
  }
}