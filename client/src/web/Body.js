import React from 'react'
import RedactorSystem from '../redactorSystem/RedactorSystem.js'
import Blog from './Blog.js'
import AboutUs from './AboutUs.js'


class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        if (this.props.whichBody === 'Blog') {
            return (
                <div className='container'>
                    <Blog />
                </div>
            );
        }
        else if (this.props.whichBody === 'About us') {
            return (
                <div className='container'>
                    <AboutUs />
                </div>
            );
        }
        else if (this.props.whichBody === 'Redaction') {
            return (
                <div className='container'>
                    <RedactorSystem />
                </div>
            );
        }
    }
}

export default Body