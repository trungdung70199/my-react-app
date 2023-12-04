import React from "react";
import { toast } from "react-toastify";

class AddComponent extends React.Component {

    state = {
        title: '',
        salary: '',
    }
    handleChangeJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()// su dung  preventDefault: website se k reload lai
        console.log('>>> Check data input:', this.state)
        if(!this.state.title || !this.state.salary){
            alert('Missing required')
            return;
        }
        // alert('Click me!')
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1000),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: ''
        })
    }

    render () {
        return(
            <>
            <form>
                <label htmlFor="fname">Job's title:</label><br />
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.handleChangeJob(event)} />
                <br/>
                <label htmlFor="lname">Salary:</label><br />
                <input
                    type="text"
                    value={this.state.salary}
                    onChange={(event) => this.handleChangeSalary(event)}
                    />
                    <br /><br />
                <input
                    type="submit"
                    value="Submit"
                    onClick={(event) => this.handleSubmit(event)} />
            </form>
            <div>There are some job and salary</div></>
        )
    }
}

export default AddComponent;