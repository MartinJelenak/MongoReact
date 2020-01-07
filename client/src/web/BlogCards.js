import React from 'react'
import BlogCardSchema from './BlogCardSchema'
class BlogCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                {
                    this.props.data.map((item, index) =>
                        <BlogCardSchema nameTopic={item.nameTopic}
                            prologTopic={item.prologTopic}
                            bodyTopic={item.bodyTopic}
                            lol={index}
                            key={index}
                            onClick={this.props.onClick} />
                    )
                }
            </>
        )
    }
}

export default BlogCard