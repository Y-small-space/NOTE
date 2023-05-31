import React from "react";
import "./index.css";
import {  NavLink} from "react-router-dom";

export default function Bar() {

  return (
    <div className="list-group">
      <NavLink className="list-item" activeClassName="active-link" to="/home">
        Home
      </NavLink>
      <NavLink className="list-item" activeClassName="active-link" to="/html">
        HTML
      </NavLink>
      <NavLink className="list-item" activeClassName="active-link" to="/css">
        CSS
      </NavLink>
      <NavLink className="list-item" activeClassName="active-link" to="/javascript">
        Javascript
      </NavLink>
      <NavLink className="list-item" activeClassName="active-link" to="/es6">
        ES6
      </NavLink>
      <NavLink className="list-item" activeClassName="active-link" to="/nodejs">
        Node.js
      </NavLink>
      <NavLink className="list-item" activeClassName="active-link" to="/react">
        React
      </NavLink>
      <NavLink className="list-item" activeClassName="active-link" to="/ajax">
        Ajax
      </NavLink>
    </div>
  );
}
