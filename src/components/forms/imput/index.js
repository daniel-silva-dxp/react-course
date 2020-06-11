import React from 'react';

const Input = ({ type, handleChange }) => {
	return <input type={type} onChange={handleChange} />;
};

export default Input;
