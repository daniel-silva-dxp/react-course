import React, { Component } from 'react';
import Button from './components/button';
import Form from './components/forms';

class App extends Component {
	constructor() {
		super();
		this.state = {
			newLogin: '',
			newPassword: '',
			user: {
				login: 'daniel_dxp@outlook.com',
				password: '#.su2020.#'
			},
			isLogged: false,
			error: false
		};
		this.setLogin = this.setLogin.bind(this);
		this.setPassword = this.setPassword.bind(this);
		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
	}
	setLogin(e) {
		this.setState({ newLogin: e.target.value });
	}
	setPassword(e) {
		this.setState({ newPassword: e.target.value });
	}
	login(e) {
		e.preventDefault();
		if (this.state.newLogin !== this.state.user.login && this.state.newPassword !== this.state.user.password) {
			return this.setState({ error: true });
		}

		this.setState({ isLogged: true, error: false });
	}
	logout(e) {
		e.preventDefault();
		this.setState({ isLogged: false, error: false });
	}
	render() {
		return (
			<div>
				{this.state.error && <small>Login ou Senha inválidos!</small>}
				{this.state.isLogged ? (
					<div>
						<h1>Welcome Daniel Silva</h1>
						<div>
							<Button handleClick={this.logout}>SAIR</Button>
						</div>
					</div>
				) : (
					<Form
						handleChangeLogin={this.setLogin}
						handleChangePassw={this.setPassword}
						handleClick={this.login}
					/>
				)}
			</div>
		);
	}
}

export default App;
