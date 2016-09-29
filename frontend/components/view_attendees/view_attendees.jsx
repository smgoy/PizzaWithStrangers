import React from 'react';

class ViewAttendees extends React.Component {
  showModal() {
      this.setState({show: true});
    }

    hideModal() {
      this.setState({show: false});
    }

    render() {
      return (
        <ButtonToolbar>
          <Button bsStyle="primary" onClick={this.showModal}>
            See who's attending >
          </Button>

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
=             ...
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.hideModal}>Close</Button>
            </Modal.Footer>
          </Modal>
        </ButtonToolbar>
      );
    }
}
