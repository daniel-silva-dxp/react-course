import React, { Component } from 'react';
import Feed from './components/feed';

class App extends Component {
	constructor() {
		super();
		this.state = {
			feed: [
				{ id: 1, username: 'Daniel Silva', curtidas: 10, comentarios: 8 },
				{ id: 2, username: 'Flávia Silva', curtidas: 110, comentarios: 38 },
				{ id: 3, username: 'Matheus Silva', curtidas: 210, comentarios: 18 },
				{ id: 4, username: 'Fabiana Martins', curtidas: 11, comentarios: 2 }
			]
		};
	}

	render() {
		return (
			<div>
				{this.state.feed.map((user) => {
					return (
						<Feed
							key={user.username}
							username={user.username}
							curtidas={user.curtidas}
							comentarios={user.comentarios}
						/>
					);
				})}
			</div>
		);
	}
}

export default App;
