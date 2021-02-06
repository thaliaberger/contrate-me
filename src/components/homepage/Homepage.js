import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css"

import Navbar from "../navbar/Navbar";

import headerImage from "../../images/Group 3.svg";

function Homepage() {
  return (
    <div className="homepage">
      <Navbar />
      <header className="header">
  <div>      <img src={headerImage} /></div>
  <div>
  <h1></h1></div>
   
      </header>
    </div>
  );
}

export default Homepage;
