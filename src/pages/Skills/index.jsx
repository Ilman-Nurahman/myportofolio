import React from "react";
import { data } from './data'
import { Element } from 'react-scroll'

function Skills() {
  return (
    <Element name="skills">
      <p style={{ textAlign: 'center', fontSize: 25, color: '#000', fontWeight: 'bold' }}>Skills</p>
      <div className="columns is-multiline is-mobile">
        {
          data.map((data, index) => {
            return (
              <div className="column is-4" key={"image" + index} style={{ marginTop: 20 }}>
                <div className="card" style={{ width: 300 }}>
                  <div className="card-image">
                    <figure className="image">
                      <img src={data.image} alt="Placeholder image" />
                    </figure>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </Element>
  );
}

export default Skills;
