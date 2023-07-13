import React, { useState } from 'react';
import s from './Experiencia.module.css';
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
      <div className={s.experienceSection}>
        <h1 className={s.destinationTitle}>Bienvenido a una experiencia radical</h1>
        <button className={s.destinationBtn} onClick={handleMap}>
          Buscá tu próximo destino
        </button>
        <div>
          {map === true ? (
            <>
            <iframe
              className={s.frame}
              title='Google Maps'
              src={`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`}
              id='iframeId'

            />
            <h2 className={s.destinationSubtitle}>Tu destino es {CityName}</h2>
            </>
          ) : (
            
              <video className={s.videoWorld} autoPlay loop muted>
                <source src={video} type='video/mp4' />
              </video>
          )}
        </div>
      </div>
    );
  };
  
  export default Experiencia;
  

