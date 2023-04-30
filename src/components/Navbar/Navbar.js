
import "./Navbar.css";
import { NavLink } from "react-router-dom";


 
import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav>
  <div id="logo">Your Logo here</div>
  <label for="drop" class="toggle">Menu</label>
  <input type="checkbox" id="drop" />
  <ul class="menu">
    <li><a href="#">About</a></li>
    <li>
      <label for="drop-1" class="toggle">Service +</label>
      <a href="#">Discover</a>
      <input type="checkbox" id="drop-1"/>
      <ul>
        <li><a href="#">Wildlife</a></li>
        <li><a href="#">Northern</a></li>
        <li><a href="#">Nairobi</a></li>
        <li><a href="#">Safaris</a></li>
        <li><a href="#">Diverse Culture</a></li>
        <li><a href="#">National Parks</a></li>

      </ul>
    </li>
    <li>
       
      <label for="drop-2" class="toggle">Portfolio +</label>
      <a href="#">Coast</a>
      <input type="checkbox" id="drop-2"/>
      <ul>
        <li><a href="#">Portfolio 1</a></li>
        <li><a href="#">Portfolio 2</a></li>
        <li>
           
          <label for="drop-3" class="toggle">Works +</label>
          <a href="#">Works</a>
          <input type="checkbox" id="drop-3"/>
          <ul>
            <li><a href="#">HTML/CSS</a></li>
            <li><a href="#">jQuery</a></li>
            <li><a href="#">Python</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li><a href="#">Blog</a></li>
    <li><a href="#">FAQ</a></li>
  </ul>
</nav>

    </>
  )
}

export default Navbar
