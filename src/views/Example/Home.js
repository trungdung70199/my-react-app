import React from "react";

class Home extends React.Component {
    render() {
        console.log(">>>check props: ", this.props)
        return (
            <>
                <h1>Make your Todo list with my app</h1>
                <p>Click the Todo and start make your todo list.</p>
                <p>Click the about you can see some job and salary.</p>
            </>
        )
    }
}

export default Home;