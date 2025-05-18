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
                <div className="card" style={{ width: 300, height: 200 }}>
                  <div className="card-image" style={{ width: '100%', height: '100%' }}>
                    <figure className="image" style={{ width: '100%', height: '100%' }}>
                      <img
                        src={data.image}
                        alt="Placeholder image"
                        style={{ width: '100%', height: '100%', objectFit: 'fill' }}
                      />
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
