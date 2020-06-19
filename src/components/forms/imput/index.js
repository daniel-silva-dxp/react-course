import React from 'react';

import './index.css';

const Input = ({ type, handleChange, value, myPlaceholder }) => {
	return <input type={type} onChange={handleChange} value={value} placeholder={myPlaceholder} />;
};

export default Input;
