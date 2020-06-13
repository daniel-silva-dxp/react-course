import React from 'react';
import Button from '../button';

import './index.css';

const Display = ({ timer, handlePlay, handlePuse, handleReset }) => {
	return (
		<div>
			<h1 className="title-timer">Timer</h1>
			<p className="timer">{timer}</p>
			<div className="wrapper-btn">
				<Button btnClass="button play" handleClick={handlePlay} />
				<Button btnClass="button pause" handleClick={handlePuse} />
				<Button btnClass="button reset" handleClick={handleReset} />
			</div>
		</div>
	);
};

export default Display;
