import React from "react";
// import { withRouter } from "react-router";
class Home extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.history.push('/todo')
        }, 3000)
    }
    render() {
        console.log(">>>check props: ", this.props)
        return (
            <>
                <h1>Make your Todo list with my app</h1>
                <p>Click the Todo and start make your todo list.</p>
                <p>Click the about you can see some job and salary.</p>
                <p>Tai lieu tham khao: <a href="https://www.w3schools.com/css/css_navbar.asp">W3Schools css_navbar</a></p>
            </>
        )
    }
}
export default Home;
// export default withRouter(Home);