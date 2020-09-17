import React from 'react'
import './Header.css'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header" >
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className="title-text" >Cozy Cocktails</h1> 
      </Link>
      <nav>
        <div className="nav-box">
          <NavLink exact to="/" className="nav-buttons">
            Home
          </NavLink>
          <NavLink exact to="/login" className="nav-buttons">
            Login
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header
