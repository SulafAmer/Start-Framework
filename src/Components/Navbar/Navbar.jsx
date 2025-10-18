import React from 'react'
import { NavLink } from 'react-router-dom'
import aboutCss from '../Navbar/Navbar.module.css'

export default function Navbar() {
  return <>
  <nav className={`navbar navbar-expand-lg ${aboutCss.navbar}`}>
  <div className="container-fluid px-5 py-3 nav-container">
    <NavLink className="navbar-brand text-white fs-3 fw-bold" to={''}>START FRAMEWORK</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <NavLink className="nav-link  text-white fs-6 fw-bold mx-3" aria-current='page' to={'about'}>ABOUT</NavLink>
        <NavLink className="nav-link text-white fs-6 fw-bold mx-3" to={'portfolio'}>PORTFOLIO</NavLink>
        <NavLink className="nav-link text-white fs-6 fw-bold mx-3" to={'contact'}>CONTACT</NavLink>

      </div>
    </div>
  </div>
</nav>

  </>
}
