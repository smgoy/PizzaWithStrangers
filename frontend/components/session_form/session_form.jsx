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
		let text;
		let submit;
		if (this.props.formType === 'login') {
			text = "If you're not yet partying with us";
			submit = "Login";
		} else {
			text = "If you're already parting with us";
			submit = "Sign Up";
		}


		return (
			<div>
				<div className="container login-greeter">
					<div className="row">
						<div className="col-md-10 col-md-offset-1">
							<h2>Hey There Stranger!</h2>
							<h4>Let's get going so we can start up the pizza party.</h4>
						</div>
					</div>
				</div>

				{ this.renderErrors() }

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
										<input type="password"
											value={this.state.password}
											onChange={this.update("password")}
											placeholder="Password"
											className="form-control" />
									</div>
								</div>

								<div className="row">
									<div className="col-md-10 col-md-offset-1">
										<input type="submit" value={submit} className="btn btn-primary login-button" />
									</div>
								</div>

								<div className="row">
									<div className="col-md-10 col-md-offset-1">
										<p>{ text } { this.navLink() }</p>
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

export default SessionForm;
