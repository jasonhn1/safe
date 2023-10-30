import React, {Component,useState, useEffect} from 'react';
import {NavLink } from 'react-router-dom';
import "./Navbar.css";

import logo from '../../assets/img/logo.png';

// Need to implement routing did not use reactstrap
const Navbar = () => { 
    return (
    <div id="nav">
      <nav className="navbar-items">
        <img src ={logo}  width="60px" height="60px"/>
        <p>Safe Accounts</p>
        <div class = "nav-menu">
          <button><NavLink class="nav-btn" to="/">Login</NavLink></button>
          <button><NavLink class="nav-btn" to="/">Sign Up</NavLink></button>
        </div>
      </nav>
    </div>
    )
  }

export default Navbar;