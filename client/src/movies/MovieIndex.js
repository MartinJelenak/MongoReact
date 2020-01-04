import React, { Component } from 'react';
import { ApiGet } from '../common/Api';
import MovieTable from './MovieTable';

export default class MovieIndex extends Component {

    constructor(props) {
        super(props);

        this.state = {
            movies: [],
        };
    }

    componentDidMount() {
        ApiGet('/api/movies')
            .then(data => this.setState({ movies: data }));
    }

    render() {
        return (
            <div>
                <h3>Seznam filmů</h3>
                <hr />
                <hr />
                <MovieTable items={this.state.movies} label="Počet filmů:" />
            </div>
        );
    }
}