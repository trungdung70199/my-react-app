import React from 'react';
import './ListTodo.scss';
import AddTodo from './AddTodo';
import { ToastContainer, toast } from 'react-toastify';

class listTodo extends React.Component {
	state = {
		listTodo: [
			{ id: 'todo1', title: 'Doing homework' },
			{ id: 'todo2', title: 'Making videos' },
			{ id: 'todo3', title: 'Fixing' }
		]
	};

	addNewTodo = (todo) => {
		// or let currentListTodo = this.state.listTodos;
		// currentListTodo.push(todo);
		this.setState({
			listTodo: [ ...this.state.listTodo, todo ] //copy
			// listTodos: currentListTodo
		});
		// Change color with toast
		toast.success('Wow so easy!!!');
	};
	render() {
		// eslint-disable-next-line no-unused-vars
		let { listTodo } = this.state;
		// or let lisTodo = this.state.listTodo;
		return (
			<div className="list-todo-container">
				<AddTodo addNewTodo={this.addNewTodo} />
				<div className="list-todo-content">
					{listTodo &&
						listTodo.length > 0 &&
						listTodo.map((item, index) => {
							return (
								<div className="todo-child" key={item.id}>
									<span>
										{index + 1} - {item.title}{' '}
									</span>
									<button className="edit">Edit</button>
									<button className="delete">Delete</button>
								</div>
							);
						})}
				</div>
			</div>
		);
	}
}
export default listTodo;
