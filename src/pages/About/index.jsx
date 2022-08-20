import React from "react";
import { Element } from 'react-scroll'
import logo from '../../assets/img/ilman_pas_hitam.jpg';

function About() {
  return (
    <Element name="about" style={{ paddingTop:150 }}>
      <p style={{ textAlign: 'center', fontSize: 25, color: '#fff', fontWeight: 'bold' }}>About Me</p>
      <div className="card" style={{ marginTop: 20, background: '#eff5fb' }}>
        <div className="columns p-5 is-multiline is-mobile">
          <div className="column is-narrow">
            <div className="card-image">
              <figure className="image is-128x128" style={{ width: 130 }}>
                <img src={logo} />
              </figure>
            </div>
          </div>
          <div className="column">
            <div className="card-content">
              <div className="content">
                <p><strong>Hello everyone...</strong></p>
                Introducing, My name is Ilman Nurahman, I'm from Indonesia, I was born in Jakarta on December 22, 2002. I am a graduate Vocational high School. I have a history of training, internships and experience working in several companies in the field of IT, I am able to work individually or in a team and able to work professionally.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  )
}
export default About;