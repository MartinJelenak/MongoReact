import React from 'react'
// import SectionWrapper from './SectionWrapper'
import PropTypes from 'prop-types';
class BlogDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const articleArr = this.props.data.find(article =>
            article._id === this.props.detailId
        )
        return (
            <>
                <h2>{articleArr.nameTopic}</h2>
                <br />
                <h5>{articleArr.prologTopic}</h5>
                <br />
                <p>{articleArr.bodyTopic}</p>
            </>
        )
    }
}

BlogDetail.propTypes = {
    data: PropTypes.array,
    index: PropTypes.number
};

export default BlogDetail