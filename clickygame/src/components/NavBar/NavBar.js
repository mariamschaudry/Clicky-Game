import React from "react";
import "./NavBar.css";

const NavBar = props => (
    <div className="navBarRow">
       <div className="navItem col-4 my auto"> <p className = "navbarBrand my-auto">Princess Clicky Game</p> </div>
       <div className="navItem col-4 my auto"> Click any image to get started!</div>
       <div className="navItem col-4 my auto"> Score : {props.score} | High Score : {props.topScore} </div>
    </div>

);

export default NavBar;