import React from 'react';
import { ButtonToolbar,
         Button,
         Modal } from 'react-bootstrap';

class ViewAttendees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: false};
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
      this.setState({show: true});
    }

    hideModal() {
      this.setState({show: false});
    }

    render() {
      return (
        <ButtonToolbar>
          <div className='show-attendees-wrapper'>
            <Button bsClass="show-attendees" onClick={this.showModal}>
              See who's attending
            </Button>
          </div>

          <Modal
            {...this.props}
            show={this.state.show}
            onHide={this.hideModal}
            dialogClassName="custom-modal"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              This is my ugly modal
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.hideModal}>Close</Button>
            </Modal.Footer>
          </Modal>
        </ButtonToolbar>
      );
    }
}

export default ViewAttendees;
