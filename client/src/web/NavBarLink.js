import React from 'react'

class NavBarLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <li className="nav-item">
                <a className="nav-link" href='#' key={this.props.name} name={this.props.name} onClick={this.props.onClick}>{this.props.name}</a>
            </li>
        )
    }
}

export default NavBarLink