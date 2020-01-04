import React, { Component } from 'react';
import { ApiGet } from '../common/Api';
import PersonTable from './PersonTable';

export default class PersonIndex extends Component {

    constructor(props) {
        super(props);

        this.state = {
            directors: [],
            actors: [],
        };
    }

    componentDidMount() {
        ApiGet('/api/directors')
            .then(data => this.setState({ directors: data }));

        ApiGet('/api/actors')
            .then(data => this.setState({ actors: data }));
    }

    render() {
        return (
            <div>
                <h3>Seznam osobností</h3>
                <hr />

                <div className="row">
                    <div className="col">
                        <PersonTable items={this.state.actors} label="Počet herců:" />
                    </div>
                    <div className="col">
                        <PersonTable items={this.state.directors} label="Počet režisérů:" />
                    </div>
                </div>
            </div>
        );
    }

}