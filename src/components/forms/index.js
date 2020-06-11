import React from 'react';
import Input from './imput';
import Button from '../button';

const Form = ({ handleChangeLogin, handleChangePassw, handleClick }) => {
	return (
		<form>
			<div>
				<label>Login: </label>
				<Input type="text" handleChange={handleChangeLogin} />
			</div>
			<div>
				<label>Senha: </label>
				<Input type="password" handleChange={handleChangePassw} />
			</div>
			<div>
				<Button handleClick={handleClick}>ENTRAR</Button>
			</div>
		</form>
	);
};

export default Form;
