import React, { Component } from 'react';
import Membro from './components/membro';
import Button from './components/button';

class App extends Component {
	constructor() {
		super();
		this.state = {
			member: 'New Member'
		};
		this.welcome = this.welcome.bind(this);
		this.clear = this.clear.bind(this)
	}
	welcome() {
		this.setState({member: 'Daniel Silva'})
	}
	clear() {
		this.setState({member: 'New Member'})
	}
	render() {
		return (
			<div>
				<Membro member={this.state.member} />
				<Button handleClick={this.welcome}>ENTRAR COMO DANIEL</Button>
				<Button handleClick={this.clear}>LIMPAR</Button>
			</div>
		);
	}
}

export default App;
