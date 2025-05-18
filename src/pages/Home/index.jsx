import React, { Component } from "react";
import { Element } from 'react-scroll'
// import component
import Navbar from "../../components/Navbar";
import About from "../About";
import Skills from "../Skills";
import Experience from "../Experience";
import Education from "../Education";
import Certification from "../Certification";
// import icon
import logoWhatsapp from '../../assets/img/icon-sosmed/whatsapp.png'
import logoFacebook from '../../assets/img/icon-sosmed/facebook.png'
import logoInstagram from '../../assets/img/icon-sosmed/instagram.png'
import logoLinkedIn from '../../assets/img/icon-sosmed/linkedin.png'
import logoJumbotron from '../../assets/img/backgrond-jumbotron.svg'
// import style css
import './style.css'
import '../../Dom/loader.js'

class HomePage extends Component {

  openWhatsapp() {
    window.open("https://api.whatsapp.com/send?phone=6287728427128", "_self")
  }

  render() {
    return (
      <div>
        {/* navbar */}
        <Navbar />
        <div className="jumbotron">
          <img src={logoJumbotron} alt=" jumbotron" />
        </div>
        <div className="brighness"></div>
        <div className="container is-max-desktop">
          <div className="container is-fluid">
            {/* jumbotron */}
            <Element name="home">
              <div style={{ width: '100%', paddingTop: 150 }}>
                <p className="pJ">Hello,</p>
                <p className="myName">I'm Ilman Nurahman</p>
                <p className="mt-2 mb-5" style={{ fontSize: 20, fontWeight: 'bold', color: 'black', color: '#2899f9', textAlign: 'center' }}>Frontend Developer</p>
                {/* sosmed */}
                <div className="mt-5">
                  <p className="pJ">Follow Me<span></span></p>
                  <div className="cenBtn">
                    <div className="CardSosmed">
                      <a href="https://api.whatsapp.com/send?phone=6287728427128" target="_blank"><img
                        src={logoWhatsapp} width="22" alt="whatsapp-link" /></a>
                      <a style={{ marginLeft: 15 }} href="https://facebook.com/ilman.nurahman.1/" target="_blank"><img
                        src={logoFacebook} width="20" alt="facebook-link" /></a>
                      <a style={{ marginLeft: 15 }} href="https://www.instagram.com/ilman_nurahman/" target="_blank"><img
                        src={logoInstagram} width="30" alt="instagram-link" /></a>
                      <a style={{ marginLeft: 15 }} href="https://www.linkedin.com/in/ilman-nurahman-34b78b229/"
                        target="_blank"><img src={logoLinkedIn} width="20" alt="linkedin-link" /></a>
                    </div>
                  </div>
                  <p className="mt-2 pJ"><a style={{ textDecoration: 'none' }}
                    href="https://drive.google.com/uc?export=download&id=1EobID7I4_d1IyrpLZRLTw-bnXi-HikNM"><strong style={{ paddingRight: 5, color: '#2899f9' }}>Download</strong></a>
                    My Curriculum vitae</p>
                </div>
                {/* button */}
                <div className="cenBtn">
                  <button className="button is-white is-outlined mt-5" onClick={this.openWhatsapp}>
                    <span className="icon">
                      <i className="fas fa-paper-plane"></i>
                    </span>
                    <span>Contact Me</span>
                  </button>
                </div>
              </div>
            </Element>
            {/* end jumbotron */}
            {/* about */}
            <About />
            <hr />
            {/* skills */}
            <Skills />
            <hr />
            {/* experience */}
            <Experience />
            <hr />
            {/* Education */}
            <Education />
            <hr />
            {/* certification */}
            <Certification />
          </div>
        </div>
        {/* footer */}
        <footer className="footer mt-5" style={{ backgroundColor: '#eff5fb' }}>
          <div className="content has-text-centered">
            <p>
              This website is made using
              <a href="https://reactjs.org/"> React.js </a> & <a href="https://bulma.io/">Bulma </a>
              technology.
            </p>
            <p>
              Powered by <strong>Ilman Nurahman</strong> 2025
            </p>
          </div>
        </footer>
      </div>
    )
  }
}

export default HomePage