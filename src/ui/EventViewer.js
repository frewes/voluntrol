import React from 'react';

export default class EventViewer extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    {this.props.data.roles.map((r,i) => { return (
                        <li key={i}>{r.name}</li>
                    );})}
                </ul>
            </div>
        );
    }
}