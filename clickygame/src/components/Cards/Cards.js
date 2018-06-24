import React from 'react';
import "./Cards.css"

const Cards = props => (
    <div className="cards">
        <div className="flexGrid">{props.children}</div>
    </div>
);

export default Cards;