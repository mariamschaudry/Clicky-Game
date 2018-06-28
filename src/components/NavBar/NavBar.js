import React from "react";
import "./NavBar.css";

const NavBar = props => (
    <div className="navBarRow">
       {/* <div className="nav-item col-4 my-auto"> <p className = "navbarBrand my-auto">Princess Clicky Game</p></div> */}
       <div className="scores"> Score: {props.score} | Top Score: {props.topScore}</div>
    </div>

);

export default NavBar;