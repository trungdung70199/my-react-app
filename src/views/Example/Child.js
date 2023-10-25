import React from 'react';
import Form from './Form';

class Child extends React.Component {
    // re-render
    render() {
        console.log('>>> Check prop:', this.props)
        // let name = this.props.name;
        // let age = this.props.age;
        // or khi ten bien trung voi ten key
        let { name, age, address, arrJobs} = this.props
        return(
            <>
                <div className='jobs-lists'>
                    {
                        arrJobs.map((item, index) => {
                            return (
                                <div key={item}>
                                    {item.title} - {item.salary}
                                </div>
                            )
                        })
                    }
                </div>
            </>
        ) 
    } 
}
export default Child;