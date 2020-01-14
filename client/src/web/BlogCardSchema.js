import React from 'react'
import { Link } from '@reach/router'

class BlogCardSchema extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const linkStyle = {
            textDecoration: "none",
            color: "dimgray"
        };
        return (
            <Link to={`/blogdetail/${this.props.data._id}`} style={linkStyle}>
                <div data-name="BlogDetail" className="col mb-4">
                    <div className="card h-100" >
                        <img src="https://www.omladnut.sk/wp-content/uploads/2019/05/zero-waste.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.data.nameTopic}</h5>
                            <p className="card-text">{this.props.data.prologTopic}</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div >
            </Link>
        )
    }
}
export default BlogCardSchema
