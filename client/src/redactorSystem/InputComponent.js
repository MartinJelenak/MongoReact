import React from 'react';

class InoutComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="form-group row">
                <label htmlFor="inputEmail3"
                    className="col-sm-2 col-form-label"
                >
                    {this.props.title}</label>
                <div className="col-sm-10">
                    <input className="form-control" type="text" placeholder="Default input" onChange={this.props.inputChange} name={this.props.title} />
                </div>
            </div>
        )
    }
}

export default InoutComponent;