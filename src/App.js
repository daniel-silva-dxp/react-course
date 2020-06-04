import React, { Component } from 'react';
import Contador from './Contador';

class App extends Component {
	constructor() {
		super();
		this.state = {
			count: 0
		};
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}
	increment() {
		this.setState({
			count: this.state.count + 1
		});
	}
	decrement() {
		if (this.state.count <= 0) return;

		this.setState({
			count: this.state.count - 1
		});
	}
	render() {
		return (
			<div>
				<h1>Contador</h1>
				<Contador count={this.state.count} increment={this.increment} decrement={this.decrement} />
			</div>
		);
	}
}

export default App;
