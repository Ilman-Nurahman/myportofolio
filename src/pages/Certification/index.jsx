import React from "react";
import { data } from "./data"
import { Element } from 'react-scroll'

function Certification() {
  return (
    <Element name="certification">
      <p style={{ textAlign: 'center', fontSize: 25, color: '#000', fontWeight: 'bold' }}>Certification</p>
      {
        data.map((item, index) => {
          return (
            <div className="card mt-5" key={item.title + index} style={{ background: '#eff5fb'}}>
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={item.image} alt="Placeholder image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{item.title}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </Element>
  )
}

export default Certification;