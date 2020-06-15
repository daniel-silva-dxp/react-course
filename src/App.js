import React, { Component } from 'react';

import './app.css';
import Nutri from './components/nutri';

class App extends Component {
	constructor() {
		super();
		this.state = {
			nutri: []
		};
	}

	componentDidMount() {
		const url = 'http://sujeitoprogramador.com/rn-api/?api=posts';
		fetch(url).then((post) => post.json()).then((post) => {
			this.setState({
				nutri: post
			});
		});
	}

	render() {
		return (
			<div className="container">
				<header>
					<strong>React Nitri</strong>
				</header>
				<Nutri nutri={this.state.nutri} />
			</div>
		);
	}
}

export default App;
