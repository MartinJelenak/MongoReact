import React from 'react'
// import SectionWrapper from './SectionWrapper'
import PropTypes from 'prop-types';
class BlogDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                {/* <SectionWrapper> */}
                <h2>{this.props.data[this.props.index].nameTopic}</h2>
                <br />
                <h5>{this.props.data[this.props.index].prologTopic}</h5>
                <br />
                <p>{this.props.data[this.props.index].bodyTopic}</p>
                {/* </SectionWrapper> */}
            </>
        )
    }
}

BlogDetail.propTypes = {
    data: PropTypes.array,
    index: PropTypes.number
};

export default BlogDetail