import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			email: "",
			password: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate(){
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn(){
		if (this.props.loggedIn){
			hashHistory.push("/");
		}
	}

	update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

	handleSubmit(e){
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});

		if (this.props.formType === "signup") {
			hashHistory.push('/new-profile');
		}
	}

	navLink(){
		if (this.props.formType === "login") {
			return <Link to="/signup">sign up instead</Link>;
		} else {
			return <Link to="/login">log in instead</Link>;
		}
	}

	renderErrors(){
		return(
			<ul>
				{this.props.errors.map( (error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				Welcome to Pizza With Strangers!
				<br/>

				Please { this.props.formType } or { this.navLink() }
				{ this.renderErrors() }

				<br />
				<label> Email:
					<input type="text"
						value={this.state.email}
						onChange={this.update("email")} />
				</label>

				<br />
				<label> Password:
					<input type="password"
						value={this.state.password}
						onChange={this.update("password")} />
				</label>

				<br />
				<input type="submit" value="Submit" />
			</form>
		);
	}

}

export default SessionForm;
