import React from 'react';
import './Demo.scss';
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
                {
                showJobs === false ?
                    <div>
                        <button className='btn-show' 
                            onClick={() => this.handleShowHide()}>
                            Show
                        </button>
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
                                        <></> <span onClick={()=>this.handleOnclickDelete(item)}>$</span> {/*<></> tao khoang trang */}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div>
                        <button className='btn-hide'
                            onClick={() => this.handleShowHide()}>
                            Hide
                        </button>
                    </div>
                </>
                    }
            </>
        )
    }
}
export default Child;
