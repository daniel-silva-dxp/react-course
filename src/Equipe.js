import React from 'react';
import Sobre from './Sobre';

const Equipe = ({ nome, cargo, idade }) => {
	return <Sobre nome={nome} cargo={cargo} idade={idade} />;
};

export default Equipe;
