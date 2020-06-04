import React from 'react';

const Sobre = ({ nome, cargo, idade }) => {
	return <div>{`Olá, meu nome é ${nome}, sou ${cargo} e tenho ${idade} de idade`}</div>;
};

export default Sobre;
