import React, { Component } from 'react';
import Form from './components/forms';
import TaskList from './components/task-list';

import './app.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			taskInputValue: '',
			tasks: [ 'Estudar React', 'Estudar React Native', 'Estudar Nodejs', 'Estudar Inglês' ],
			taskIndex: -1
		};
		this.addTask = this.addTask.bind(this);
		this.editTask = this.editTask.bind(this);
		this.deleteTask = this.deleteTask.bind(this);
	}

	componentDidMount() {
		const tasks = JSON.parse(localStorage.getItem('tasks'));

		if (!tasks) {
			return;
		}

		this.setState({
			tasks
		});
	}

	componentDidUpdate(prevProps, prevState) {
		const { tasks } = this.state;
		if (tasks === prevState.tasks) {
			return;
		}
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}
	addTask(e) {
		e.preventDefault();

		const { tasks, taskIndex } = this.state;
		let { taskInputValue } = this.state;
		taskInputValue = taskInputValue.trim();

		if (tasks.indexOf(taskInputValue) !== -1) return;

		const myTasks = [ ...tasks ];

		if (taskIndex === -1) {
			this.setState({
				tasks: [ ...myTasks, taskInputValue ],
				taskInputValue: ''
			});
		} else {
			myTasks[taskIndex] = taskInputValue;
			this.setState({
				tasks: [ ...myTasks ],
				taskIndex: -1
			});
		}
	}

	editTask(e, index) {
		const { tasks } = this.state;
		this.setState({
			taskIndex: index,
			taskInputValue: tasks[index]
		});
	}

	deleteTask(e, index) {
		const { tasks } = this.state;
		const newTasks = [ ...tasks ];
		newTasks.splice(index, 1);
		this.setState({
			tasks: [ ...newTasks ]
		});
	}

	render() {
		return (
			<div>
				<header>
					<div className="container">
						<Form
							addTask={this.addTask}
							setTask={(e) => {
								this.setState({
									taskInputValue: e.target.value
								});
							}}
							newTask={this.state.taskInputValue}
						/>
					</div>
				</header>
				<div className="container">
					<TaskList tasks={this.state.tasks} handleEdit={this.editTask} handleDelete={this.deleteTask} />
				</div>
			</div>
		);
	}
}

export default App;
