import React, { Component } from 'react';
import Display from './components/display-timer';

import './app.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			timer: '00:00:00',
			workHours: 0
		};
		this.timer = null;
		this.play = this.play.bind(this);
		this.pause = this.pause.bind(this);
		this.reset = this.reset.bind(this);
	}
	timeFormat(counter) {
		let display = new Date(counter * 1000);
		return display.toLocaleTimeString('pt-BR', {
			hour12: false,
			timeZone: 'UTC'
		});
	}
	play() {
		this.timer = setInterval(() => {
			this.setState({
				workHours: this.state.workHours + 1,
				timer: this.timeFormat(this.state.workHours)
			});
		}, 1000);
	}
	pause() {
		clearInterval(this.timer);
	}
	reset() {
		clearInterval(this.timer);
		this.setState({
			timer: '00:00:00',
			workHours: 0
		});
	}

	render() {
		return (
			<div className="container">
				<div className="content text-align">
					<Display
						timer={this.state.timer}
						handlePlay={this.play}
						handlePuse={this.pause}
						handleReset={this.reset}
					/>
				</div>
			</div>
		);
	}
}

export default App;
