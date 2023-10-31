import React from 'react';

class ListTodo extends React.Component {
	state = {
		list: [
			{ id: 'todo1', title: 'Doing homework' },
			{ id: 'todo2', title: 'Making videos' },
			{ id: 'todo3', title: 'Fixing' }
		]
	};

	render() {
		// eslint-disable-next-line no-unused-vars
		let { list } = this.state;
		// or let lisTodos = this.state.listTodos;
		return (
			<div className="list-todo-container">
				<div className="add-todo">
					<input type="text" />
					<button type="button">Add</button>
				</div>
				<div className="list-todo-content">
					<div className="todo-child">
						<span>Todo 1</span>
						<button>Edit</button>
						<button>Delete</button>
					</div>
					<div className="todo-child">
						<span>Todo 2</span>
						<button>Edit</button>
						<button>Delete</button>
					</div>
					<div className="todo-child">
						<span>Todo 3</span>
						<button>Edit</button>
						<button>Delete</button>
					</div>
				</div>
			</div>
		);
	}
}
export default ListTodo;
