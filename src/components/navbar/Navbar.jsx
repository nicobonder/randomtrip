import React from 'react'
import { NavLink, Link } from "react-router-dom";
import s from './Navbar.module.css'
import logo from '../../assets/logoRandom.png'


export default function Navbar() {

  return (
    <div className={s.navbarSection}>
    <Link className={s.logo} to='/'><img className={s.logo} src={logo} alt="logo Random Trip" /></Link>
    <nav className={s.links}>
        <NavLink className={s.link} to='trip'>Viaje Random</NavLink>
        <NavLink className={s.link} to='experience'>Tu destino</NavLink>
        <NavLink className={s.link} to='help'>?</NavLink>

      </nav>
    </div>
  )
}
