import React from 'react'
import { Link } from '@reach/router'
// import { Router } from '@reach/router'

class NavBarLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <li className="nav-item">
                    <Link to='blog' className="nav-link">Blog</Link>
                </li>
            </>
        )
    }
}

export default NavBarLink