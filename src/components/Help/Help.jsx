import React from 'react';
import { Link } from "react-router-dom";
import './Help.css'

export default function Help () {

    return (
        <div className='helpSection'>
            <h1 className='helpTitle'>¿Qué es RandomTrip?</h1>
            <p className='helpText'>Empecemos por lo que NO es. RandomTrip no es una guía de viajes ni una ley que hay que seguir para viajar. Tampoco es una herramienta donde vas a encontrar la respuesta de qué tenés que conocer según los rankings de popularidad.</p>
            <br />
            <h2 className='helpSubtitle'>¿Entonces qué es RandomTrip?</h2>
            <p className='helpText'>La página tiene 2 secciones principales: Viaje Random y Tu Destino. <span className='helpSpan'>Viaje Random</span> consiste en juegos que te darán pautas que sirven como parámetros para organizar un viaje en el que la mayoría de las cosas que solés organizar a la perfección, 
                ahora van a depender del azar. Esto te permite convertirte en un explorador que va a tener que buscr la forma de cumplir con estas pautas que le impuso el azar.</p>
            <p className='helpText'>La sección de <span className='helpSpan'>Tu Destino</span> es más alocada todavía. Al hacer clic en el botón vas a encontrar una ciudad totalmente random de cualquier parte del mundo. 
                Sí, sé que no vas a ir a cualquier pueblito que te aparezca en una página, pero tal vez el nombre de ese pueblito te despierta la curiosidad y te ponés a investigar y descubrís una región de la que no habías escuchado hablar en un país al que nunca pensaste ir. Y ahora ya tenés una idea extraña, que tal vez te haga planificar un viaje que jamás habías soñado.</p>
        
            <p className='helpText'>Entonces podés ver RandomTrip como un ejercicio de creatividad, <span className='helpSpan'>una herramienta que podés usar para inspirarte</span> y animarte a encontrar en tu próximo viaje cosas que ni siquiera estabas buscando.</p>
            <div className='helpButtons'>
                <Link to='/trip' className='helpBtn'>Viaje Random</Link>
                <Link to='/experience' className='helpBtn'>Tu Destino</Link>
            </div>

        </div>
    )
}