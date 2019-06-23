import React from 'react';

import RoleEditor from './RoleEditor';

export default class EventView extends React.Component {
    constructor(props) {
        super(props);
        console.log(props); 
        
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDayChange = this.handleDayChange.bind(this);
        this.handleRoleChange = this.handleRoleChange.bind(this);
    }


    handleTitleChange(e) {
        let E = this.props.data;
        E.title = e.target.value;
        this.props.update(E);
    }

    handleDayChange(e) {
        let E = this.props.data;
        E.setDays(parseInt(e.target.value));
        this.props.update(E);
    }

    handleRoleChange(i,r) {
        let E = this.props.data;
        E.roles[i] = r;
        this.props.update(E);
    }

    render() {
        console.log(this.props.data);
        return (
            <div>
                <input type="text" value={this.props.data.title} onChange={this.handleTitleChange}/>
                <input type="number" value={this.props.data.days} min={1} max={6} step={1} onChange={this.handleDayChange}/>
                <table>
                    <tbody>
                    <tr>
                        <td>Role</td>
                        {[...Array(this.props.data.days)].map((u,i) => {
                            return <td key={i}>Day {i+1}</td>
                        })}
                    </tr>
                    {this.props.data.roles.map((r,i) => { return (
                        <RoleEditor key={i} data={r} days={this.props.data.days} update={(r) => {this.handleRoleChange(i,r)}}/>
                    );})}
                    </tbody>
                </table>
            </div>
        );
    }
}