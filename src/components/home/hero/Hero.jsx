import React from 'react'
import './hero.css'
import Title from '../../common/title/Title.jsx'

const Hero = () => {
  return (
    <>
          <section className="hero">
          <div className="container">
                  <div className="row">
                      <Title subtitle="WELCOME TO BRIGHT BULBS" title="Best Online Education"/>
                      <p>Bright Bulbs is an online education platform that makes learning flexible, accessible, and inspiring. We help learners grow with high-quality courses they can access anytime, anywhere.</p>
                      <div className="button">
                          <button className="primary-btn">
                              GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
                          </button>
                          <button>
                              VIEW COURSES <i className="fa fa-long-arrow-alt-right"></i>
                          </button>
                      </div>
                 </div>
          </div>
          </section>
          <div className="margin"></div>
          
    </>
  )
}

export default Hero
