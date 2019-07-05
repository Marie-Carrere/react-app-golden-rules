import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../Header.css'

const Header = (props) => (
    <nav className="navbar navbar-default" role="navigation">
        <div className="navbar-header">
            <button type="button" className="navbar-toggle">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand brand">Developers rules</Link>
        </div>

        <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
                <li>
                    <NavLink exact to="/" activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/new" activeClassName="active">New</NavLink>
                </li>
            </ul>
        </div>
    </nav>
)

export default Header