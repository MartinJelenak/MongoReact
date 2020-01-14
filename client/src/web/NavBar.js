import React from 'react'
import logo from './logo.png';
import { Link } from '@reach/router'
class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="/#">
                        <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                        ZEROWASTE GIRLS
                    </a>
                </nav>

                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to='/' className="nav-link">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='aboutus' className="nav-link">About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='reduction' className="nav-link">Redaction</Link>
                        </li>
                    </ul>
                    <span className="navbar-text">Navbar text with an inline element</span>
                </div >
            </nav >
        )
    }
}

export default NavBar