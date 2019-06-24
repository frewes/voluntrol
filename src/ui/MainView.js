import React from 'react';

import Event from '../api/Event';
import EventView from './EventView';

import { Container } from 'reactstrap';
import { templateTypes } from "../templates/types.json";

export default class MainView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allTypes: templateTypes,
            currEvent: 0,
            events: [new Event()]
        }
        this.state.events[0].populateFLL(this.state.allTypes);
        console.log(this.state);
        this.updateEvent = this.updateEvent.bind(this);
    }

    updateEvent(E) {
        let EVs = this.state.events;
        EVs[this.state.currEvent] = E;
        this.setState({events: EVs});
    }
        
    render() {
        return (
        <Container>
            <br/>
            <EventView data={this.state.events[this.state.currEvent]} update={this.updateEvent}/>
        </Container>
        );
    }
}