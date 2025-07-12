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
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
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
