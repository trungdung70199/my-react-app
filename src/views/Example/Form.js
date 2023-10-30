/* eslint-disable react/jsx-no-undef */
import React from "react";
import Child from './Child';
import AddComponent from "./AddComponent";
// import Product from './product';

class Form extends React.Component {
    state = {
        arrJobs: [
            {id: 'abcJob1', title: 'student', salary: '100'},
            {id: 'abcJob2', title: 'Developer', salary: '600'},
            {id: 'abcJob3', title: 'Tester', salary: '500'}
        ]
    }


    handleSubmit = (event) => {
        event.preventDefault()// su dung  preventDefault: website se k reload lai
        console.log('>>> Check data input:', this.state)
        alert('Click me!')
    }
    render() {
        return (
            <>
                <AddComponent />

                <Child 
                    arrJobs = {this.state.arrJobs}
                />
            </>
        )
    }
}

export default Form;
