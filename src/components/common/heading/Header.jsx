import React from "react"
import Head from "./Head.jsx"
import "./header.css"
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div>
      <Head />
      <header>
        <nav className="flexSB">
          <ul className="flexSB">
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/courses"> Courses</Link>
            </li>
            <li>
              <Link to="/about"> About</Link>
            </li>
            <li>
              <Link to="/team"> Team</Link>
            </li>
            <li>
              <Link to="/pricing"> Pricing</Link>
            </li>
            <li>
              <Link to="/journal"> Journal</Link>
            </li>
            <li>
              <Link to="/contact"> Contact</Link>
            </li>
          </ul>
          <div className="start">
            <div className="button">GET CERTIFICATE</div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
