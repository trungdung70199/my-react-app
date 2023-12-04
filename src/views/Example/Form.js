/* eslint-disable react/jsx-no-undef */
import React from "react";
import Child from './Child';
import AddComponent from "./AddComponent";
// import Product from './product';

class Form extends React.Component {
    state = {
        arrJobs: [
            {id: 'abcJob1', title: 'student', salary: '100'},
            {id: 'abcJob2', title: 'Developer', salary: '3000'},
            {id: 'abcJob3', title: 'Tester', salary: '4000'}
        ]
    }

    addNewJob = (job) => {
        console.log('Check job from parent:', job);
        // let currentJobs  = this.state.arrJobs;
        // currentJobs.push(job)
        // let currentJobs = this.state.arrJobs
        // or
        this.setState({
            // or 
            arrJobs: [...this.state.arrJobs, job] //...: copy arrJobs
            // arrJobs: currentJobs
    })
    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJobs
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('>>> run did update: ', 'prev state: ', prevState, 'current state: ', this.state)
    }
    // Call API
    componentDidMount() {
        console.log('>>> run component Did Mount')
    }

    render() {
        return (
            <>
                <AddComponent
                 addNewJob={this.addNewJob}
                />
                <Child 
                    arrJobs = {this.state.arrJobs}
                    deleteAJob = {this.addNewJob}
                />
            </>
        )
    }
}

export default Form;
