/* eslint-disable react/jsx-no-undef */
import React from "react";
import Child from './Child';

class Form extends React.Component {
    state = {
        firstName: '',
        lastName: ''
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()// su dung  preventDefault: website se k reload lai
        console.log('>>> Check data input:', this.state)
        alert('Click me!')
    }
    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br/>
                    <input 
                    type="text" 
                    value={this.state.firstName}
                    onChange={(event) => this.handleChangeFirstName(event)}
                    />
                    <br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input 
                    type="text" 
                    value={this.state.lastName}
                    onChange={(event) => this.handleChangeLastName(event)}
                    /><br/><br/>
                    <input 
                    type="submit" 
                    value="Submit" 
                    onClick={(event) => this.handleSubmit(event)}
                    />
                </form> 
                <Child name={'Child one'}/>
                <Child name={'Child two'}/>
                <Child name={'Child three'}/>
                <Child name={'Child four'}/>
            </>
        )
    }
}

export default Form;
