import React from 'react'

class BlogDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <p>{this.props.index}</p>
                {/* <h2>{this.props.data[this.props.index].nameTopic}</h2>
                <br />
                <h5>{this.props.data[this.props.index].prologTopic}</h5>
                <br />
                <p>{this.props.data[this.props.index].bodyTopic}</p> */}
            </>
        )
    }
}

export default BlogDetail