import React from "react";
import './Nav.scss';
// import { Link, NavLink } from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">

                {/* <NavLink to="/" activeClassName="active" exact={true}>
                    Home
                </NavLink>
                <NavLink to="/todo" activeClassName="active">
                    Todo
                </NavLink>
                <NavLink to="/about" activeClassName="active">
                    About
                </NavLink> */}

                {/* No reload page */}
                {/* <Link to="/">Home</Link>
                <Link to="/todo">Todo</Link>
                <Link to="/about">About</Link> */}
                <a className="active" href="/">Home</a>
                <a href="/todo">Todo</a>
                <a href="/about">Job & Salary</a>
            </div>
        )
    }
}

export default Nav;