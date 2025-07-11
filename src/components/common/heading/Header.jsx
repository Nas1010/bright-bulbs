import React from 'react'
import Head from './Head.jsx'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul>
            <li>
              <Link to="/"> Home</Link>
              <Link to="/courses"> Courses</Link>
              <Link to="/about"> About</Link>
              <Link to="/team"> Team</Link>
              <Link to="/pricing"> Pricing</Link>
              <Link to="/journal"> Journal</Link>
              <Link to= "/contact"> Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
