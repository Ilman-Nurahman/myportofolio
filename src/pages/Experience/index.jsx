import React from "react";
import { data } from './data'
import { Element } from 'react-scroll'

function Experience() {
  return (
    <Element name="experience">
      <p style={{ textAlign: 'center', fontSize: 25, color: '#000', fontWeight: 'bold' }}>Experience</p>
      {
        data.map((item, index) => {
          return (
            <div className="card mt-5" key={item.company+"card" + index} style={{ width: '100%', background: '#eff5fb' }}>
              <div className="p-5">
                <article className="media">
                  <div className="columns is-multiline is-mobile" key={item.company + index}>
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
                          <strong style={{ fontSize: 25 }}>{item.company}</strong>
                          <p className="mt-3">Position : {item.position}</p>
                          <p>Period :</p>
                          <ul>
                            <li style={{ display: item.company === 'PT ALEXINDO' ? 'none' : '' }}>{item.periodContract.start} - {item.periodContract.end} ({item.periodContract.type})</li>
                            <li>{item.periodIntern.start} - {item.periodIntern.end} ({item.periodIntern.type})</li>
                          </ul>
                          <p>Jobdesk :</p>
                          <ul>
                            {
                              item.jobdesk.map((data, index) => {
                                return (
                                  <li key={data + index}>{data}</li>
                                )
                              })
                            }
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          )
        })
      }
    </Element>
  );
}

export default Experience;

