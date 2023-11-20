import React from 'react';
import './ListTodo.scss';
import AddTodo from './AddTodo';
import { toast } from 'react-toastify';

class ListTodo extends React.Component {
	// eslint-disable-next-line react/require-render-return
	state = {
		listTodo: [
			{ id: 'todo1', title: 'Doing homework' },
			{ id: 'todo2', title: 'Make video' },
			{ id: 'todo3', title: 'Fixing' }
		]
	};

	addNewTodo = (todo) => {
		// let currentListTodo = this.state.listTodo;
		// currentListTodo.push(todo);
		this.setState({
			// listTodo: currentListTodo
			listTodo: [...this.state.listTodo, todo]
		})
		toast.success("Wow so easy!")
	}

	handleDeleTodo = (todo) => {
		let currentTodo = this.state.listTodo;
		currentTodo = currentTodo.map(item => item.id !== todo.id);
		this.setState({
			listTodo: currentTodo
		})
	}

	render() {
		// eslint-disable-next-line no-unused-vars
		let { listTodo } = this.state;
		// or listTodo = this.state.listTodo;
		return (
			<div className="list-todo-container">
				<AddTodo
					addNewTodo={this.addNewTodo}
				/>
				<div className="list-todo-content">
					{listTodo &&
						listTodo.length > 0 &&
						listTodo.map((item, index) => {
							return (
								<div className="todo-child" key={item.id}>
									<span> {index + 1} - {item.title}</span>
									<button className='edit'>Edit</button>
									<button className='delete'
										onClick={() => this.handleDeleTodo(item)}
									>
										Delete
									</button>
								</div>
							);
						})}
				</div>
			</div>
		);
	}
}

export default ListTodo;
