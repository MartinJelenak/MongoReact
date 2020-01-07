import React from 'react'
import NavBarLink from './NavBarLink'
import logo from './logo.png';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            // <div className='container'>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="#">
                        <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                        ZEROWASTE GIRLS
                    </a>
                </nav>

                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <NavBarLink name={'Blog'} onClick={this.props.onClick} />
                        <NavBarLink name={'About us'} onClick={this.props.onClick} />
                        <NavBarLink name={'Redaction'} onClick={this.props.onClick} />
                    </ul>
                    <span className="navbar-text">Navbar text with an inline element</span>
                </div>
            </nav >
            // </div>

        )
    }
}

export default NavBar