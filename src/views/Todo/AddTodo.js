import React from "react";

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
            alert('missing title')
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