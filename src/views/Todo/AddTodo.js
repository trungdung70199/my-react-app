import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component {
    state = {
        title: ''
    }

    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleAddTodo = () => {
        if(!this.state.title) {
            toast.error(`Missing title's Todo`)
            alert(`Missing title's Todo`)
            return;
            // if(undefined/null/empty) => false
        }
        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title
        }

        this.props.addNewTodo(todo);
        this.setState({
            title: ''
        })
    }
    render () {
        let { title } = this.state;
        return(
            <div className="add-todo">
                <h2>Todo list App</h2>
                <input type="text" value={title} 
                    onChange={(event) => this.handleOnChangeTitle(event)}
                />
                <button type="button" className='add'
                    onClick={() => this.handleAddTodo()}
                >
                    Add
                </button>
            </div>
        ) 
    }
}

export default AddTodo;