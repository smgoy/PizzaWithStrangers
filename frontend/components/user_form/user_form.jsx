import React from 'react';
import { Link, hashHistory } from 'react-router';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.user.user.email,
      password: props.user.user.password,
      f_name: '',
      l_name: '',
      city_id: '',
      description: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    this.props.signup({user});
  }

  componentDidMount() {
		this.props.requestCities();
	}

  componentWillReceiveProps(newProps){
    if (newProps.loggedIn) {
      hashHistory.push(`/city/${newProps.currentUser.city_id}`);
    }
	}

  renderErrors(){
		if (this.props.errors.length > 0){
			return true;
		} else {
			return false;
		}
	}

  update(field, e){
    let val;
    if (field === 'city_id') {
      val = $(e.currentTarget).find(":selected").data("id");
    } else {
      val = e.currentTarget.value;
    }

    this.setState({[field]: val});
	}

  wrapErrors(errorElement) {
    return(
      <div className="row">
				<div className="col-md-10 col-md-offset-1">
          {errorElement}
        </div>
      </div>
    );
  }

  render() {
    const {cities} = this.props;
    const cityList = Object.keys(cities).map( id => (
      <option data-id={id} key={cities[id].name}>{cities[id].name}</option>
    ));

    let emailErrors = [];
    let fNameError = '';
    let cityError = '';
    let errorClass = '';
    let requiredFields = '';
    if (this.renderErrors()) {
      errorClass = ' form-danger';
      requiredFields = <p className="error-message">* required fields</p>;
      this.props.errors.forEach( (error, i) => {
        if (error.includes('Email')) {
          emailErrors.push(<p key={i} className="error-message">{error}</p>);
        } else if (error.includes('City')){
          cityError = <p className="error-message">You must choose a city</p>;
        } else if (error.includes('F name')){
          fNameError = <p className="error-message">You must enter your first name</p>;
        }
      });
    }

    return(
      <div>
        <div className="container login-greeter">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <h2>You're almost there!</h2>
              <h4>Just fill out your profile so you're not such a stranger.</h4>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <form className="well well-sm" onSubmit={this.handleSubmit}>

                {this.wrapErrors(requiredFields)}

                <div className="row">
                  <div className="col-md-10 col-md-offset-1">
                    <input type="text"
                      value={this.state.email}
                      onChange={this.update.bind(this, "email")}
                      placeholder="Email"
                      className={`form-control${errorClass}`} />
                  </div>
                </div>

                {this.wrapErrors(emailErrors)}

                <div className="row">
                  <div className="col-md-10 col-md-offset-1">
                    <input type="text"
                      value={this.state.f_name}
                      onChange={this.update.bind(this, "f_name")}
                      placeholder="First Name"
                      className={`form-control${errorClass}`} />
                  </div>
                </div>

                {this.wrapErrors(fNameError)}

                <div className="row">
                  <div className="col-md-10 col-md-offset-1">
                    <input type="text"
                      value={this.state.l_name}
                      onChange={this.update.bind(this, "l_name")}
                      placeholder="Last Name"
                      className="form-control" />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-10 col-md-offset-1">
                    <select onChange={this.update.bind(this, "city_id")}
                            className={`form-control${errorClass}`}
                            defaultValue=''>
                      <option value="" disabled>Select your city</option>
                      {cityList}
                    </select>
                  </div>
                </div>

                {this.wrapErrors(cityError)}

                <div className="row">
                  <div className="col-md-10 col-md-offset-1">
                    <textarea onChange={this.update.bind(this, "description")}
                              placeholder="Tell us about yourself..."
                              className="form-control"
                              rows="5"
                              defaultValue={this.state.description} />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-10 col-md-offset-1">
                    <input type="submit" value="Submit" className="btn btn-primary login-button" />
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

export default UserForm;
