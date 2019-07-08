import React from 'react'
import '../navbar.css'
import {NavLink, withRouter} from 'react-router-dom'

//Here withRouter is HOC(Higher order component which enhances the props of the component aroudnwhich its wrapped)
const Navbar = () => {
    /*setInterval(() => {
        props.history.push("/contact")
    },2000)*/
    return (
                <nav className="nav-wrapper darken-3">
                        <a className="brand-logo">PARADISE</a>
                        <ul className="right hide-on-med-and-down">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            <li><NavLink to="/add-day-form">AddDayForm</NavLink></li>
                            <li><NavLink to="/members">Members</NavLink></li>
                        </ul>
                </nav>
        )
}

export default  withRouter(Navbar)