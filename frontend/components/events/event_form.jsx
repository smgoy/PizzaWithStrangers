import React from 'react';
import Datetime from 'react-datetime';
import { Link, hashHistory } from 'react-router';

class EventForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city_id: this.props.city_id,
      address: '',
      time: '',
      seats: '',
      name: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field, e){
    let val;
    if (field === 'time') {
      val = e._d;
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

  render() {


    return(
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <form className="well well-sm" onSubmit={this.handleSubmit}>

              <div className="row">
                <div className="col-md-10 col-md-offset-1">
                  <input type="text"
                    value={this.state.name}
                    onChange={this.update.bind(this, "name")}
                    placeholder="Party Name"
                    className="form-control" />
                </div>
              </div>

              <div className="row">
                <div className="col-md-10 col-md-offset-1">
                  <input type="text"
                    value={this.state.address}
                    onChange={this.update.bind(this, "address")}
                    placeholder="Address"
                    className="form-control" />
                </div>
              </div>

              <div className="row">
                <div className="col-md-10 col-md-offset-1">
                  <input type="text"
                    value={this.state.seats}
                    onChange={this.update.bind(this, "seats")}
                    placeholder="Seats Available"
                    className="form-control" />
                </div>
              </div>

              <div className="row">
                <div className="col-md-10 col-md-offset-1">
                  <Datetime defaultValue="Time and Date"
                            onChange={this.update.bind(this, "time")} />
                </div>
              </div>

              <div className="row">
                <div className="col-md-10 col-md-offset-1 login-demo">
                  <input type="submit" className="btn btn-primary login-button" />
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EventForm;
