import React from 'react'

class BlogCardSchema extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div name="BlogDetail" className="col mb-4" onClick={this.props.handleClickDetail} id={this.props.index}>

                <div className="card h-100" >
                    <img src="https://www.omladnut.sk/wp-content/uploads/2019/05/zero-waste.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.data.nameTopic}</h5>
                        <p className="card-text">{this.props.data.prologTopic}</p>
                    </div>
                    {/* <button onClick={this.props.onClick} name={'BlogDetail'} value={this.props.index}>Click</button> */}
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div >
        )
    }
}
export default BlogCardSchema