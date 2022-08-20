import React, { Component } from "react";
import "./Navbar.css";
import { Link } from 'react-scroll'
import logoNav from '../assets/img/logo.jpg'

function Navbar() {

  function navbarMobile() {
    try {
      let nav = document.querySelector("#navbarBasicExample");
      nav.classList.toggle('is-active')
    } catch (error) {
      alert("Document Object Model Error")
    }
  }

  return (
    <div>
      <nav className="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="mt-2" href="https://ilman22.showwcase.com/" target="_blank">
            <div className="ml-5" style={{width: 40}}>
              <img className="imageClass" src={logoNav} alt="logoNav" />
            </div>
          </a>

          <a onClick={navbarMobile} id="burger" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div id="navDiv" className="navbar-end">
            <Link id="navItem" className="navbar-item mx-2 Home classes" activeClass="active" to="home" spy={true} smooth={true} offset={-80} duration={500}>
              Home
            </Link>
            <Link id="navItem" className="navbar-item mx-2 About classes" activeClass="active" to="about" spy={true} smooth={true} offset={-80} duration={500}>
              About
            </Link>
            <Link id="navItem" className="navbar-item mx-2 Skills classes" activeClass="active" to="skills" spy={true} smooth={true} offset={-80} duration={500}>
              Skills
            </Link>
            <Link id="navItem" className="navbar-item mx-2 Experience classes" activeClass="active" to="experience" spy={true} smooth={true} offset={-80} duration={500}>
              Experience
            </Link>
            <Link id="navItem" className="navbar-item mx-2 Education classes" activeClass="active" to="education" spy={true} smooth={true} offset={-80} duration={500}>
              Education
            </Link>
            <Link id="navItem" className="navbar-item mx-2 Certification classes" activeClass="active" to="certification" spy={true} smooth={true} offset={-80} duration={500}>
              Certification
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar;