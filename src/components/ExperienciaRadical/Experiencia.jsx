import React, { useState } from 'react';
import './Experiencia.css';
import video from './VideoWorld.mp4';

import { Country, State, City }  from 'country-state-city';

const Experiencia = () => {
    const [map, setMap] = useState(false);
    const [lon, setLon] = useState(0);
    const [lat, setLat] = useState(0);
    const [CityName, setCityName] = useState('');

      const cityList = City.getAllCities() 
  
      const randomIndex = Math.floor(Math.random() * cityList.length)
      console.log('randomIndex', randomIndex)
  
      const randomCity = cityList[randomIndex]
      const latitude = randomCity.latitude
      const longitude = randomCity.longitude
      const name = randomCity.name   
  
      const handleMap = async () => {
              setLon(longitude); // Actualiza el valor de lon
              setLat(latitude); // Actualiza el valor de lat
              setCityName(name)
              setMap(true); // Activa el mapa
          };
        
    return (
      <div className='experienceSection'>
        <h1 className='destinationTitle'>Bienvenido a una experiencia radical</h1>
        <button className='destinationBtn' onClick={handleMap}>
          Buscá tu próximo destino
        </button>
        <div className='ExperienceWrapper'>
          {map === true ? (
            <>
            <iframe
              className='frame'
              title='Google Maps'
              src={`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`}
              id='iframeId'

            />
            <h2 className='destinationSubtitle'>Tu destino es {CityName}</h2>
            </>
          ) : (
            
              <video className='videoWorld' autoPlay loop muted>
                <source src={video} type='video/mp4' />
              </video>
          )}
        </div>
      </div>
    );
  };
  
  export default Experiencia;
  

