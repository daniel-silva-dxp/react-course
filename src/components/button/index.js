import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Button = ({ children, handleClick, btnClass, method }) => {
	return (
		<button type={method} onClick={handleClick} className={btnClass}>
			{children}
		</button>
	);
};

Button.propTypes = {
	handleClick: PropTypes.func
};

export default Button;
