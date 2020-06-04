import React, { Component } from 'react';
import Equipe from './Equipe';

class App extends Component {
	constructor() {
		super();
		this.state = {
			devs: [
				{
					nome: 'Daniel Silva',
					cargo: 'Desenvolvedor Front-end',
					idade: 32
				},
				{
					nome: 'Matheus Silva',
					cargo: 'Desenvolvedor Back-end',
					idade: 18
				},
				{
					nome: 'Henrique Lima',
					cargo: 'Programador',
					idade: 30
				}
			]
		};
	}
	render() {
		return (
			<div>
				{this.state.devs.map((dev) => {
					return <Equipe nome={dev.nome} cargo={dev.cargo} idade={dev.idade} />;
				})}
			</div>
		);
	}
}

export default App;
