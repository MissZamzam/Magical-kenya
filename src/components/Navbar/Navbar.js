
import "./Navbar.css";
import { NavLink } from "react-router-dom";


 
import React from 'react'

const Navbar = () => {
  return (
    <>
  <div class="navbar">
 
    <div class="nav-header">
      <div class="nav-logo">
        <a href="#">
        </a>
      </div>
    </div>
 
    <input type="checkbox" id="nav-check" />
    <div class="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
 
    <div class="nav-links">
      <NavLink to='/about'>
      <a href="#">About</a>
      </NavLink>
 
      <div class="dropdown">
        <a class="dropBtn" href="#">Discover
          <i class="fas fa-angle-down"></i>
        </a>
        <div class="drop-content">
          <NavLink to='/wildlife'>
            <a href="#">Wildlife</a>
          </NavLink>
          <NavLink to='/nairobi'>
            <a href="#">Nairobi</a>
          </NavLink> <NavLink to='/culture'>
            <a href="#">Culture</a>
          </NavLink> <NavLink to='/north'>
            <a href="#">Northern</a>
          </NavLink> <NavLink to='/parks'>
            <a href="#">Parks</a>
          </NavLink>
         
 
          <div class="dropdown2">
          
            <div class="drop-content2">
              <a href="#">HTML</a>
              <a href="#">CSS</a>
              <a href="#">JavaScript</a>
              <a href="#">jQuery</a>
            </div>
          </div>
        </div>
      </div>

      <div class="dropdown">
        <a class="dropBtn" href="#">Services
          <i class="fas fa-angle-down"></i>
        </a>
        <div class="drop-content">
          <a href="#">Web Design</a>
          <a href="#">Marketing</a>
          <a href="#">WordPress</a>
 
          <div class="dropdown2">
            <a class="dropBtn2" href="#">More
              <i class="fas fa-angle-right"></i>
            </a>
            <div class="drop-content2">
              <a href="#">HTML</a>
              <a href="#">CSS</a>
              <a href="#">JavaScript</a>
              <a href="#">jQuery</a>
            </div>
          </div>
        </div>
      </div>
 
      <a href="#">Blogs</a>
      
      <div class="dropdown">
        <a class="dropBtn" href="#">Services
          <i class="fas fa-angle-down"></i>
        </a>
        <div class="drop-content">
          <a href="#">Web Design</a>
          <a href="#">Marketing</a>
          <a href="#">WordPress</a>
 
          <div class="dropdown2">
            <a class="dropBtn2" href="#">More
              <i class="fas fa-angle-right"></i>
            </a>
            <div class="drop-content2">
              <a href="#">HTML</a>
              <a href="#">CSS</a>
              <a href="#">JavaScript</a>
              <a href="#">jQuery</a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
 
  </div>
 

    </>
  )
}

export default Navbar
