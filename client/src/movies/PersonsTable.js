import React, { Component } from 'react';

export default class PersonTable extends Component {

    render() {
        return (
            <div>
                <p>{this.props.label} {this.props.items.length}</p>

                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Jméno</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.items.map((item, index) =>
                                <tr key={index + 1}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }

}