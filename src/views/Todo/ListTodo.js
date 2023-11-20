import React from 'react';
import './ListTodo.scss';
import AddTodo from './AddTodo';

class ListTodo extends React.Component {
	// eslint-disable-next-line react/require-render-return
	state = {
		listTodo: [
			{ id: 'todo1', title: 'Doing homework' },
			{ id: 'todo2', title: 'Make video' },
			{ id: 'todo3', title: 'Fixing' }
		]
	};
	render() {
		// eslint-disable-next-line no-unused-vars
		let { listTodo } = this.state;
		// or listTodo = this.state.listTodo;
		return (
			<div className="list-todo-container">
				<AddTodo />
				<div className="list-todo-content">
					{listTodo &&
						listTodo.length > 0 &&
						listTodo.map((item, index) => {
							return (
								<div className="todo-child" key={item.id}>
									<span> {index + 1} - {item.title}</span>
									<button className='edit'>Edit</button>
									<button className='delete'>Delete</button>
								</div>
							);
						})}
				</div>
			</div>
		);
	}
}

export default ListTodo;
