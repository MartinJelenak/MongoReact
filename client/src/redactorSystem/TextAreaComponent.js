import React from 'react';

class TextAreaComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Clanok</label>
                <textarea onChange={this.props.inputBodyTextChange} className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
        );
    }
}

export default TextAreaComponent;