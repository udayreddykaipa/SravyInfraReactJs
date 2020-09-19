import React from 'react'
import { CardColumns, Card } from 'react-bootstrap'
import CountUp from 'react-countup';

function M(props) {
    return (
        <Card>
                <Card.Title>{props.name}</Card.Title>
                <hr />
                <h1><CountUp end={props.count} duration={6}></CountUp></h1>
        </Card>
    );
}

function OutReach() {
    return (
        <CardColumns className="col-md-4">
            <M name="States" count="2"></M>
            <M name="Cities" count="2"></M>
            <M name="Projects" count="8"></M>
            <M name="Families" count="953"></M>
            <M name="Area(Sq.ft)" count="953"></M>
        </CardColumns>
    );
}

export default OutReach;