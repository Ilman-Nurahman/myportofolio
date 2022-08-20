import React from "react";
import { data } from "./data";
import { Element } from 'react-scroll'

function Education() {
  return (
    <Element name="education">
      <p style={{ textAlign: 'center', fontSize: 25, color: '#000', fontWeight: 'bold' }}>Education</p>
      {
        data.map((item, index) => {
          return (
            <div className="card mt-5" key={item.company+"cardedu" + index} style={{ width: '100%', background: '#eff5fb' }}>
              <div className="columns p-5 is-multiline is-mobile" key={item.nama_sekolah + index}>
                <div className="column is-narrow">
                  <figure className="media-left">
                    <p className="image is-128x128">
                      <img src={item.image} />
                    </p>
                  </figure>
                </div>
                <div className="column">
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong style={{ fontSize: 25 }}>{item.nama_sekolah}</strong>
                        <p className="mt-3">Location : {item.lokasi}</p>
                        <p className="mt-3">Major : {item.jurusan}</p>
                        <p>Period : {item.period}</p>
                      </p>
                    </div>
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

export default Education;