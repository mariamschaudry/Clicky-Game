import React from 'react';
import "./Title.css"


const Title = props => (
    <div className="jumbotron">
        <div className = "jumbotron title">
            <h1 className="display-4 text-center">Disney Princess Clicky Game</h1>
            <div>&nbsp;</div>
            <h2 className="text-center">Instructions: Click on any image to earn points, but don't click on any more than once! </h2>
        </div>
    </div>
);

export default Title;