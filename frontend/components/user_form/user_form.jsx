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
      city: '',
      description: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    this.props.signup({user});
  }

  componentWillReceiveProps(newProps){
    if (newProps.loggedIn) {
      hashHistory.push("/");
    }
	}

  update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

  render() {
    const {cities} = this.props;
    const cityList = Object.keys(cities).map( id => (
      <option onChange={this.update("city")} key={cities[id].name}>{cities[id].name}</option>
    ));

    return(
      <div>
        <div className="container login-greeter">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <h2>You're almost there!</h2>
              <h4>Just fill out your profile so you're not such a stranger.</h4>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <form className="well well-sm" onSubmit={this.handleSubmit}>

                <div className="row">
                  <div className="col-md-10 col-md-offset-1">
                    <input type="text"
                      value={this.state.email}
                      onChange={this.update("email")}
                      placeholder="Email"
                      className="form-control" />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-10 col-md-offset-1">
                    <input type="text"
                      value={this.state.f_name}
                      onChange={this.update("f_name")}
                      placeholder="First Name"
                      className="form-control" />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-10 col-md-offset-1">
                    <input type="text"
                      value={this.state.l_name}
                      onChange={this.update("l_name")}
                      placeholder="Last Name"
                      className="form-control" />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-10 col-md-offset-1">
                    <select className="form-control">
                      <option value="" disabled selected>Select your city</option>
                      {cityList}
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-10 col-md-offset-1">
                    <input type="text"
                      value={this.state.description}
                      onChange={this.update("description")}
                      placeholder="Tell us about yourself..."
                      className="form-control" />
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
