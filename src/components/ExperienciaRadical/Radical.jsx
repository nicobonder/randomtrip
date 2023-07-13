//Componente que está en el Home y lleva al usuario a la página de Experiencia
import React from 'react'
import { Link } from 'react-router-dom';
import s from './Radical.module.css';

export default function Radical() {
  return (
    <div className={s.radicalSection}>
      <h2 className={s.radicalTitle}>¿Listo para una experiencia radical?</h2>
      <Link to='/experience'><button className={s.radicalBtn}>Animate</button></Link>
    </div>
  )
}
