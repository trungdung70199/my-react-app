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

    addNewJob = (job) => {
        console.log('Check job from parent:', job);
        // let currentJobs = this.state.arrJobs
        // or
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
    })
    }

    render() {
        return (
            <>
                <AddComponent
                 addNewJob={this.addNewJob}
                />
                <Child 
                    arrJobs = {this.state.arrJobs}
                />
            </>
        )
    }
}

export default Form;
