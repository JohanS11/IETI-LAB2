import React from 'react';
import {SimpleCard} from "./SimpleCard";

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SimpleCard
                tareaN = {this.props.text } 
                priority = {this.props.priority} 
                date = {this.props.dueDate.toString()} >
            </SimpleCard>
        );
    }

}