import React from 'react'
import { Link } from 'react-router-dom';

import './toInfo.css';

export default function ToInfo() {
  return (
    <section className='toInfoSection'>
        <h2 className='infoTitle'>Mirá toda la información de tu viaje</h2>
        <Link to='/information'><button className='infoBtn'>Ver</button></Link>
    </section>
  )
}
