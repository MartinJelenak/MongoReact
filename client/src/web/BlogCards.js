import React from 'react'
import BlogCardSchema from './BlogCardSchema'
// import PropTypes from 'prop-types';

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
                        <BlogCardSchema data={item}
                            index={index}
                            key={index}
                            handleClickDetail={this.props.handleClickDetail} />
                    )
                }
            </>
        )
    }
}


export default BlogCard