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
		],
		editTodo: {}
	};
	// add new todo
	addNewTodo = (todo) => {
		// let currentListTodo = this.state.listTodo;
		// currentListTodo.push(todo);
		this.setState({
			// listTodo: currentListTodo
			listTodo: [...this.state.listTodo, todo]
		})
		toast.success("Wow so easy!")
	}
	// Delete todo
	handleDeleTodo = (todo) => {
		let currentTodo = this.state.listTodo;
		currentTodo = currentTodo.filter(item => item.id !== todo.id);
		this.setState({
			listTodo: currentTodo
		})
		toast.success("Delete success!");
	}
	// Edit todo{
	handleEditTodo = (todo) => {
		let {editTodo, listTodo} = this.state;
		// eslint-disable-next-line no-undef
		let isEmptyObj = Object.keys(editTodo).length === 0;
		// save
		if (isEmptyObj === false && editTodo.id === todo.id) {
			let listTodoCopy = [...listTodo]
			let objIndex = listTodoCopy.findIndex((item => item.id === todo.id));

			listTodoCopy[objIndex].title = editTodo.title
			this.setState ({
				listTodo: listTodoCopy,
				editTodo: {}
			})
			toast.success("Update todo success");
			return;
		}
			// edit
			this.setState ({
				editTodo: todo
			})
	}

	handleOnChangEditTodo = (event) => {
		let editTodoCopy = {...this.state.editTodo};
		editTodoCopy.title = event.target.value;
		this.setState ({
			editTodo: editTodoCopy
		})
	}

	render() {
		let { listTodo, editTodo } = this.state;
		// or listTodo = this.state.listTodo;
		let isEmptyObj = Object.keys(editTodo).length === 0 // => true
		console.log('>>> Check empty', isEmptyObj)
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
									{isEmptyObj === true ?
									<span> {index + 1} - {item.title}</span>
									:
									<>
										{editTodo.id === item.id ?
											<span>
												{index + 1} - <input value={editTodo.title} 
													onChange={(event) => this.handleOnChangEditTodo(event)}
												/>
											</span>
											:
											<span>
												{index + 1} - {item.title} 
											</span>
										}
									</>
									}
									<button className='edit'
										onClick={() => this.handleEditTodo(item)}
									>
										{isEmptyObj === false && editTodo.id === item.id ?
											'Save' : 'Edit'
										}
									</button>
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
