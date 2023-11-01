import React from 'react';
import { toast } from 'react-toastify';

class AddTodo extends React.Component {
	state = {
		title: ''
	};
	handleOnChangeTitle = (event) => {
		this.setState({
			title: event.target.value
		});
	};

	handleAddTodo = () => {
		if (!this.state.title) {
			//if(undefined/ null/ (empty)) => false
			toast.error(`Missing title's `);
			return;
		}

		let todo = {
			id: Math.floor(Math.random() * 10000),
			title: this.state.title
		};
		this.props.addNewTodo(todo);
		console.log(todo);
		this.setState('');
	};

	render() {
		// eslint-disable-next-line no-unused-vars
		let { title } = this.state;
		return (
			<div className="add-todo">
				<input type="text" onChange={(event) => this.handleOnChangeTitle(event)} />
				<button type="button" className="add" onClick={() => this.handleAddTodo()}>
					Add
				</button>
			</div>
		);
	}
}

export default AddTodo;
