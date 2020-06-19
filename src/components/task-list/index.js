import React from 'react';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './index.css';

const TaskList = ({ tasks, handleEdit, handleDelete }) => {
	return (
		<div className="content">
			<ul className="my-tasks">
				{tasks.map((task, index) => {
					return (
						<li key={index}>
							{`${index + 1} - ${task}`}
							<div>
								<FaEdit onClick={(e) => handleEdit(e, index)} className="edit" />
								<FaWindowClose onClick={(e) => handleDelete(e, index)} className="delete" />
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default TaskList;
