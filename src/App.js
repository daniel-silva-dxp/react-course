import React from 'react';
import Social from './Social';
import Equipe from './Equipe';

const App = () => {
	return (
		<div>
			<Social />
			<Equipe nome="Daniel Silva" cargo="Programador" idade="32" />
		</div>
	);
};

export default App;
