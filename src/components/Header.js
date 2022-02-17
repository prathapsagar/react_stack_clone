import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { url } from "../App";
import { Link } from "react-router-dom";

function Header() {
  
 

  return (
    <div className="head-wrapper">
      <div className="head-title">Stackoverflow_clone</div>
      <div >
   
      </div>

      <div className="home-cart"></div>
    </div>
  );
}

export default Header;
