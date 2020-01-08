import React from 'react'
import RedactorSystem from '../redactorSystem/RedactorSystem.js'
import BlogCard from './BlogCards'
import BlogDetail from './BlogDetail'
import AboutUs from './AboutUs.js'


class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogCardState: true,
            choosenBlogState: '',
            data: []
        }
    }

    componentDidMount() {
        const request = new URL('/api/title', 'http://localhost:3000');

        fetch(request)
            .then(response => response.json())
            .then(data => this.setState({ data: data }));
        console.log('prebehol fetch znova')
    }



    render() {
        if (this.props.whichBody === 'Blog') {
            return (
                <div className="row row-cols-1 row-cols-md-3">
                    <BlogCard data={this.state.data} onClick={this.props.onClick} />
                </div>
            );
        }
        else if (this.props.whichBody === 'BlogDetail') {
            return (
                <>
                    {/* <p>{this.props.index}</p> */}
                    <BlogDetail data={this.state.data} index={this.props.index} />
                </>
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