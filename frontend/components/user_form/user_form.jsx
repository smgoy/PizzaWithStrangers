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

    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type='text'
                 value={this.state.email}
                 onChange={this.update('email')}>
          </input>
        </label>
        <br />

        <label>
          First Name:
          <input type='text'
                 value={this.state.f_name}
                 onChange={this.update('f_name')}>
          </input>
        </label>
        <br />

        <label>
          Last Name:
          <input type='text'
                 value={this.state.l_name}
                 onChange={this.update('l_name')}>
          </input>
        </label>
        <br />

        <label>
          City:
          <input type='text'
                 value={this.state.city}
                 onChange={this.update('city')}>
          </input>
        </label>
        <br />

        <label>
          description:
          <input type='text'
                 value={this.state.description}
                 onChange={this.update('description')}>
          </input>
        </label>
        <br />

        <input type='submit' value="Submit"></input>
      </form>
    );
  }

}

export default UserForm;
