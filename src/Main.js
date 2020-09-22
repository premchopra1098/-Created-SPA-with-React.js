import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./Home";
  import Stuff from "./Stuff";
  import Contact from "./Contact";
  class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <h1>Select Sequences</h1>
            <ul className="header">
            <li><NavLink exact to="/">Select compaign setting</NavLink></li>
<li><NavLink to="/Setup">Setup Adgroups</NavLink></li>
<li><NavLink to="/Review">Review Prospectus</NavLink></li>
<li><NavLink to="/Contact">Select Sequence</NavLink></li>
<li><NavLink to="/Schedule">Schedule</NavLink></li>
<li><NavLink to="/Confirm">Confirm</NavLink></li>
            </ul>
            <div className="content">
  <Route exact path="/" component={Home}/>
  <Route path="/stuff" component={Stuff}/>
  <Route path="/contact" component={Contact}/>
</div>
          </div>
        </HashRouter>
      );
    }
  }
 
export default Main;