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
            <div className="row row-cols-1 row-cols-md-3">
                {
                    this.props.data.map((item, index) =>
                        <BlogCardSchema
                            data={item}
                        />
                    )
                }
            </div>
        )
    }
}


export default BlogCard