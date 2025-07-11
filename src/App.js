import React from 'react'
import Header from './components/common/heading/Header.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  )
}

export default App

