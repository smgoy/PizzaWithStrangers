import React from 'react';
import Datetime from 'react-datetime';
import { Link, hashHistory } from 'react-router';
import moment from 'moment';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.location.pathname === '/new-event') {
      this.state = {
        city_id: this.props.city_id,
        address: '',
        time: '',
        seats: '',
        name: ''
      };
    } else {
      const { event } = this.props;
      const eventTime = new Date(event.date + ', ' + event.time);

      this.state = {
        city_id: this.props.city_id,
        address: event.address,
        time: eventTime,
        seats: event.seats,
        name: event.name
      };
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.eventErrors.length === 0) {
      hashHistory.push(`/city/${this.props.city_id}`);
    }
  }

  update(field, e){
    debugger;
    let val;
    if (field === 'time') {
      val = moment(e._d).format("YYYY-MM-DDTHH:mm");
    } else {
      val = e.currentTarget.value;
    }
    this.setState({[field]: val});
	}

  handleSubmit(e){
		e.preventDefault();
		const event = this.state;
		this.props.createEvent({event});
	}

  renderErrors(){
		if (this.props.eventErrors.length > 0){
			return true;
		} else {
			return false;
		}
	}

  wrapErrors(errorElement) {
    return(
      <div className="row">
				<div className="col-md-8 col-md-offset-2">
          {errorElement}
        </div>
      </div>
    );
  }

  render() {

    let nameError = '';
    let addressError = '';
    let seatError = '';
    let timeError = '';
    let errorClass = '';
    let requiredFields = '';

    if (this.renderErrors()) {
      errorClass = ' form-danger';
      requiredFields = <p className="error-message">* required fields</p>;
      this.props.eventErrors.forEach( (error) => {
        if (error.includes('Name')) {
          nameError = <p className="error-message">You must choose a name for your party</p>;
        } else if (error.includes('Seat')){
          seatError = <p className="error-message">You must specify a seat number</p>;
        } else if (error.includes('Time')){
          timeError = <p className="error-message">You must choose a time and date</p>;
        } else if (error.includes('Address')){
          addressError = <p className="error-message">You must specify an address</p>;
        }
      });
    }

    return(
      <div>
        <div className="container login-greeter">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <h2>Thanks for hosting!</h2>
              <h4>Just fill out the details below to get the party started.</h4>
            </div>
          </div>
        </div>


        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <form className="well well-sm" onSubmit={this.handleSubmit}>

                {this.wrapErrors(requiredFields)}

                <div className="row">
                  <div className="col-md-8 col-md-offset-2">
                    <input type="text"
                      value={this.state.name}
                      onChange={this.update.bind(this, "name")}
                      placeholder="Party Name"
                      className={`form-control${errorClass}`} />
                  </div>
                </div>

                {this.wrapErrors(nameError)}

                <div className="row">
                  <div className="col-md-8 col-md-offset-2">
                    <input type="text"
                      value={this.state.address}
                      onChange={this.update.bind(this, "address")}
                      placeholder="Address"
                      className={`form-control${errorClass}`} />
                  </div>
                </div>

                {this.wrapErrors(addressError)}

                <div className="row">
                  <div className="col-md-8 col-md-offset-2">
                    <input type="text"
                      value={this.state.seats}
                      onChange={this.update.bind(this, "seats")}
                      placeholder="Seats Available"
                      className={`form-control${errorClass}`} />
                  </div>
                </div>

                {this.wrapErrors(seatError)}

                <div className="row">
                  <div className="col-md-8 col-md-offset-2">
                    <Datetime onChange={this.update.bind(this, "time")}
                              inputProps={{className: `form-control${errorClass}`,
                                           placeholder: "Time and Date"}}
                              defaultValue={this.state.time}/>
                  </div>
                </div>

                {this.wrapErrors(timeError)}

                <div className="row">
                  <div className="col-md-8 col-md-offset-2 login-demo">
                    <input type="submit" className="btn btn-primary login-button" />
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventForm;
