import React from 'react';

import Event from '../api/Event';
import EventView from './EventView';

export default class MainView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            event: new Event()
        }
        this.state.event.populateFLL();
        console.log(this.state);
        this.updateEvent = this.updateEvent.bind(this);
    }

    updateEvent(event) {
        this.setState(event);
    }
        
    render() {
        return (
        <div>
            <EventView data={this.state.event} update={this.updateEvent}/>
        </div>
        );
    }
}