import React from 'react'
import RedactorSystem from '../redactorSystem/RedactorSystem.js'
import BlogCard from './BlogCards'
import BlogDetail from './BlogDetail'
import AboutUs from './AboutUs.js'
import { Router } from '@reach/router'

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            < Router >
                <BlogCard path='/' data={this.props.data} handleClickDetail={this.props.handleClickDetail} />
                <BlogDetail path='blogdetail/:detailId' data={this.props.data} />
                <AboutUs path='aboutus' />
                <RedactorSystem path='reduction' />
            </Router >
        )
    }
}

export default Body