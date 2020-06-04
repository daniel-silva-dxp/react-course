import React from 'react';

const Contador = ({ count, increment, decrement }) => {
	return (
		<div>
			<button onClick={decrement}>-</button>
			{count}
			<button onClick={increment}>+</button>
		</div>
	);
};

export default Contador;
