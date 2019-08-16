import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class DetailModal extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { user } = this.props;
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            User detail
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>ID: {user.id}</h4>
          <h4>Name: {user.name}</h4>
          <h4>User name: {user.username}</h4>
          <h4>Email: {user.email}</h4>
          <h4>Phone: {user.phone}</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}