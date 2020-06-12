import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Button = ({ children, handleClick }) => {
	return (
		<button onClick={handleClick} className="btn btn-medium btn-color">
			{children}
		</button>
	);
};

Button.propTypes = {
	handleClick: PropTypes.func.isRequired
};

export default Button;
