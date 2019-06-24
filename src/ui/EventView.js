import React from 'react';

import RoleEditor from './RoleEditor';

import { Table, Input, InputGroup, InputGroupAddon } from 'reactstrap';

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
                <InputGroup>
                    <Input type="text" value={this.props.data.title} onChange={this.handleTitleChange}/>
                    <Input type="number" value={this.props.data.days} min={1} max={5} step={1} onChange={this.handleDayChange}/>
                    <InputGroupAddon addonType="append">days</InputGroupAddon>
                </InputGroup>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Role</th>
                            {[...Array(this.props.data.days)].map((u,i) => {
                                return <th key={i}>Day {i+1}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.roles.map((r,i) => { return (
                            <RoleEditor key={i} data={r} days={this.props.data.days} update={(r) => {this.handleRoleChange(i,r)}}/>
                        );})}
                    </tbody>
                </Table>
            </div>
        );
    }
}