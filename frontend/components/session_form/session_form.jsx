import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			email: "",
			password: "",
			errors: []
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.demo = this.demo.bind(this);
	}

	update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.loggedIn) {
			hashHistory.push('/cities');
		}

		if (nextProps.signUpInfo) {
			if (nextProps.signUpInfo.password.length < 6) {
				this.setState({errors: ["Password must be at least 6 characters"]});
			} else {
				hashHistory.push('/new-profile');
			}
		}

		if (nextProps.errors.length > 0) {
			this.setState({errors: nextProps.errors});
		}

		if (this.props.formType !== nextProps.formType) {
			this.setState({errors: []});
		}
	}

	handleSubmit(e){
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

	navLink(){
		if (this.props.formType === "login") {
			return <Link to="/signup">sign up instead</Link>;
		} else {
			return <Link to="/login">log in instead</Link>;
		}
	}

	demo(e) {
		e.preventDefault();
		const guest = {
										user:
											{
												email: "guest_user@example.com",
												password: "guestPassword"
											}
									};

		this.props.login(guest);
	}

	renderErrors(){
		if (this.state.errors.length > 0){
			return true;
		} else {
			return false;
		}
	}

	render() {
		let welcomeText;
		let text;
		let submit;
		if (this.props.formType === 'login') {
			welcomeText = "Welcome Back!";
			text = "If you're not yet partying with us";
			submit = "Login";
		} else {
			welcomeText = "Hey There Stranger!";
			text = "If you're already parting with us";
			submit = "Sign Up";
		}

		let errorMessage = '';
		let error = '';
		if (this.renderErrors()) {
			errorMessage = <div className="row">
												<div className="col-md-10 col-md-offset-1">
													<p className="error-message">{this.state.errors[0]}</p>
												</div>
											</div>;
			error = ' form-danger';
		}

		return (
			<div>
				<div className="container login-greeter">
					<div className="row">
						<div className="col-md-10 col-md-offset-1">
							<h2>{ welcomeText }</h2>
							<h4>Let's get going so we can start up the pizza party.</h4>
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
											className={`form-control${error}`} />
									</div>
								</div>

								<div className="row">
									<div className="col-md-10 col-md-offset-1">
										<input type="password"
											value={this.state.password}
											onChange={this.update("password")}
											placeholder="Password"
											className={`form-control${error}`} />
									</div>
								</div>

								{errorMessage}

								<div className="row">
									<div className="col-md-10 col-md-offset-1 login-demo">
										<input type="submit" value={submit} className="btn btn-primary login-button" />
										<input onClick={this.demo} type="submit" value='Demo' className="btn btn-primary login-button" />
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
