import React from 'react'
import RedactorSystem from '../redactorSystem/RedactorSystem.js'
import BlogCard from './BlogCards'
import BlogDetail from './BlogDetail'
import AboutUs from './AboutUs.js'


class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }






    render() {
        if (this.props.whichBody === 'Blog') {
            return (
                <div className="row row-cols-1 row-cols-md-3">
                    <BlogCard data={this.props.data} handleClickDetail={this.props.handleClickDetail} />
                </div>
            );
        }
        else if (this.props.whichBody === 'BlogDetail') {
            return (
                <BlogDetail data={this.props.data} index={this.props.index} />
            );
        }
        else if (this.props.whichBody === 'About us') {
            return (
                <AboutUs />
            );
        }
        else if (this.props.whichBody === 'Redaction') {
            return (
                <RedactorSystem />
            );
        }
    }
}

export default Body