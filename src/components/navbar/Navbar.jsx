import React from 'react'
import { NavLink, Link } from "react-router-dom";
import './Navbar.css'
import logo from '../../assets/logoRandom.png'


export default function Navbar() {

  return (
    <div className="navbarSection">
      <Link className="logo" to='/'><img className="logo" src={logo} alt="logo Random Trip" /></Link>
      <nav className="links">
          <NavLink className="link" to='trip'>Viaje Random</NavLink>
          <NavLink className="link" to='experience'>Tu destino</NavLink>
          <NavLink className="link" to='help'>?</NavLink>
        </nav>
    </div>
  )
}
