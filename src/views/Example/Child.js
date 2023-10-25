import React from 'react';

class Child extends React.Component {
    // re-render
    render() {
        return(
            <>
                <div >
                    Child Component: {this.props.name}
                </div>
            </>
        ) 
    } 
}
export default Child;