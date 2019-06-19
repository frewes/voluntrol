import React from 'react';

export default class EventView extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDayChange = this.handleDayChange.bind(this);
    }


    handleTitleChange(e) {
        let E = this.props.data;
        E.title = e.target.value;
        this.props.update(E);
    }

    handleDayChange(e) {
        let E = this.props.data;
        E.setDays(e.target.value);
        this.props.update(E);
    }

    render() {
        console.log(this.props.data);
        return (
            <div>
                <input type="text" value={this.props.data.title} onChange={this.handleTitleChange}/>
                <input type="number" value={this.props.data.days} min={1} max={6} step={1} onChange={this.handleDayChange}/>
                <ul>
                    {this.props.data.roles.map((r,i) => { return (
                        <li key={i}>{r.role.name}</li>
                    );})}
                </ul>
            </div>
        );
    }
}