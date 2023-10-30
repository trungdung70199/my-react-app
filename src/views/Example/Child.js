import React from 'react';

class Child extends React.Component {
    // re-render
    state = {
        showJobs: false
    }

    handleShowHide = (status) => {
    this.setState({
        showJobs: !this.state.showJobs // Neu true <--> false
    })
    }

    handleOnclickDelete = (job) => {
        console.log('>>> handleOnclickDelete: ', job)
        this.props.deleteAJob(job)
    }
    render() {
        // let name = this.props.name;
        // let age = this.props.age;
        // or variable == key
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        console.log('>>> check conditional:', check)
        return(
            <>
                {showJobs === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    : 
                <>
                    <div className="jobs-lists">
                        {
                            arrJobs.map((item, index) => {
                                if(item.salary >= 500) {

                                }
                                return (
                                    <div key={item.id}>
                                        {item.title} - {item.salary} 
                                        <></> <span onClick={()=>this.handleOnclickDelete(item)}>x</span> {/*<></> tao khoang trang */}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div>
                        <button onClick={() => this.handleShowHide()}>Hide</button>
                    </div>
                </>
                    }
            </>
        )
    }
}

// const child = (props) => {
//     let { arrJobs } = props;
//     return(
//         <>
//             <div className="jobs-lists">
//                 {
//                     arrJobs.map((item, index) => {
//                         // Out put salary >= 500 people
//                         if (+item.salary >= 500) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}
//                                 </div>
//                             )
//                         }
//                     })
//                 }
//             </div>
//         </>
//     )
// }

// const Child = (props) => {
//     console.log(">>> Check child props", props)
//     return(
//         <div>Hello arrow function</div>
//     )
// }
export default Child;
