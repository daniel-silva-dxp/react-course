import React from 'react';
import Input from './imput';
import Button from '../button';
import { FaPlus } from 'react-icons/fa';

import './index.css';

const Form = ({ addTask, setTask, newTask }) => {
	return (
		<form onSubmit={addTask} action="#">
			<Input type="text" handleChange={setTask} value={newTask} myPlaceholder="Add Your Task" />
			<Button method="submit" btnClass="btn btn-medium btn-color">
				<FaPlus />
			</Button>
		</form>
	);
};

export default Form;
