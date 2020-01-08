import React from 'react';
import BlogCard from './BlogCards'
import BlogDetail from './BlogDetail'
class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topics: [],
            blogCardState: true,
            choosenBlogState: ''
        }
    }
    // componentDidMount() {
    //     const request = new URL('/api/title', 'http://localhost:3000');

    //     fetch(request)
    //         .then(response => response.json())
    //         .then(data => this.setState({ topics: data }));

    //     this.setState({
    //         blogCardState: true
    //     })
    // }

    render() {
        if (this.state.blogCardState === true) {
            return (
                <BlogCard data={this.state.topics} onClick={this.handleClick} />
                </div >
            );
        } else {
            return (
                <BlogDetail data={this.state.topics} index={this.state.choosenBlogState} />
            );
        }
    }
    handleClick = (event) => {
        // event.preventDefault();
        console.log(event.target.name)
        this.setState({
            choosenBlogState: event.target.name,
            blogCardState: false
        })
    }
}

export default Blog;