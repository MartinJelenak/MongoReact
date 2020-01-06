import React from 'react';

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topics: []
        }
    }
    componentDidMount() {
        const request = new URL('/api/title', 'http://localhost:3000');

        fetch(request)
            .then(response => response.json())
            .then(data => this.setState({ topics: data }));
    }

    render() {
        return (
            <>
                {
                    this.state.topics.map((item, index) =>
                        <React.Fragment>
                            <h2 key={index}> {item.nameTopic}   </h2>
                            <h5 key={index}> {item.prologTopic} </h5>
                            <p key={index}> {item.prologTopic} </p>
                        </React.Fragment>
                    )
                }
            </>
        );
    }

}

export default Blog;