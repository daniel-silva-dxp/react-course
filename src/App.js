import React, { Component } from 'react';
import Membro from './components/membro';
import Button from './components/button';

class App extends Component {
	constructor() {
		super();
		this.state = {
			member: 'New Member',
			isLogged: false
		};
		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
	}
	login() {
		this.setState({
			member: 'Daniel Silva',
			isLogged: true
		});
	}
	logout() {
		this.setState({
			member: 'New Member',
			isLogged: false
		});
	}
	render() {
		return (
			<div>
				{!this.state.isLogged ? (
					<div>
						<div>Welcome to the login</div>
						<Button handleClick={this.login}>LOGIN</Button>
					</div>
				) : (
					<div>
						<Membro member={this.state.member} />
						<Button handleClick={this.logout}>LOGOUT</Button>
					</div>
				)}
			</div>
		);
	}
}

export default App;
