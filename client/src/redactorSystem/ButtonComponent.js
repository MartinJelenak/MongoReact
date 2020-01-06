import React from 'react';

class ButtonComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="form-group row">
                <div className="col-sm-1">
                    <button type="submit" className="btn btn-primary" onClick={this.props.SubmitButClick}>{this.props.butTitle}</button>
                </div>
            </div>
        );
    }
}

export default ButtonComponent;