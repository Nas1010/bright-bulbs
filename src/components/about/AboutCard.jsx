import React from "react"
import Title from "../common/title/Title.jsx"
import {homeAbout} from "../../dummyData.js"

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            <img src="./images/about.webp" alt="About Us" />
          </div>
          <div className="right row">
            <Title
              subtitle="LEARN ANYTHING"
              title="Benefits About Online Learning"
            />
            <div className="items">
              {homeAbout.map((val) => (
                <div className="items flexSB">
                  <div className="img">
                    <img src={val.cover} alt={val.title} />
                  </div>
                  <div className="text">
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutCard
