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
    this.props.requestAttendees(this.props.eventId);
    this.setState({show: true});
  }

  hideModal() {
    this.setState({show: false});
  }

  viewAttendees() {
    const attendee = this.props.eventAttendees;
    return Object.keys(attendee).map( id => {
      return (
        <div key={id} className="show-attendees">
          <img key={`profile-image-${id}`}
               src={attendee[id].profile_image}
               className='profile-image '/>
          <p key={`name-${id}`}
             className='display-name'>
             {`${attendee[id].f_name} ${attendee[id].l_name}`}
          </p>
        </div>
      );
    });
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
          show={this.state.show}
          onHide={this.hideModal}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">
              People Attending {this.props.eventName}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.viewAttendees()}
          </Modal.Body>
        </Modal>
      </ButtonToolbar>
    );
  }
}

export default ViewAttendees;
