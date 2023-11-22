import React from "react";
import './Nav.scss';
// import {
// 	Link, NavLink
// } from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                {/* <Link to="/">Home</Link>
                <Link to="/todo">Todo</Link>
                <Link to="/about">About</Link> */}
                <a class="active" href="/">Home</a>
                <a href="/todo">Todo</a>
                <a href="/about">About</a>
            </div>
        )
    }
}

export default Nav;