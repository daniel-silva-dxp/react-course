import React, { Component } from 'react';
import Ideia from './components/ideia';
import Button from './components/button';
import Text from './components/text-ideia';

import './app.css';
class App extends Component {
	constructor() {
		super();
		this.state = {
			light: require('./assets/idea_two.png'),
			ideia: ''
		};
		this.ideias = [
			'"A mente que se abre a uma nova idéia jamais voltará ao seu tamanho original."',
			'"Se, a princípio, a ideia não é absurda, então não há esperança para ela."',
			'"Sentir é criar. Sentir é pensar sem ideias, e por isso sentir é compreender, visto que o Universo não tem ideias."',
			'"Ah! Não me diga que concorda comigo! Quando as pessoas concordam comigo, tenho sempre a impressão de que estou errado."',
			'"Os ideais que iluminaram o meu caminho são a bondade, a beleza e a verdade."',
			'"As ideias das pessoas são pedaços da sua felicidade."'
		];

		this.renderIdeia = this.renderIdeia.bind(this);
	}

	renderIdeia() {
		const randomNumber = Math.floor(Math.random() * this.ideias.length);
		this.setState({
			ideia: this.ideias[randomNumber],
			light: require('./assets/idea_one.png')
		});
	}

	render() {
		return (
			<div className="container">
				<Ideia imgUrl={this.state.light} />
				<Button handleClick={this.renderIdeia}>Pensador | Ideia</Button>
				<Text ideia={this.state.ideia} />
			</div>
		);
	}
}

export default App;
