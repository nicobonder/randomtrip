import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../myContext';
import './Information.css';


import PDFWrapper from './PDFWrapper';
// import SendInformation from './SendInformation';

export default function Information() {
    const { km, setKm } = useContext(MyContext);
    const { food, setFood } = useContext(MyContext);
    const { read, setRead } = useContext(MyContext);
    const { total, setTotal } = useContext(MyContext);

    const navigate = useNavigate();
    const handleSendInformation = () => {
      navigate('/sendInformation', { state: { km, food, read, total } });
    };

  return (
    <section className='informationSection'>
        <h1 className='inforTitle'>Estas son las pautas para tu próximo viaje</h1>
        <form className='infoForm'>
            <h2 className='infoDescriptionText'>Tenés que hacer {km} kilómetros</h2>
            <h2 className='infoDescriptionText'>Tu opción de comida es {food}</h2>
            <h2 className='infoDescriptionText'>Tenés que {read}</h2>
            <h2 className='infoDescriptionText'>Tu presupuesto máximo es ${total}</h2>
            <div className='infoDescription'>
              <p className='descriptionText'>Recordá que estas pautas son solo una referencia para que te obligues a pensar y a hacer nuevos recorridos, y a visitar lugares que a los que no irías en un viaje tradicional.</p>
            </div>
            <div className='BtnDiv'>
              <PDFWrapper />
              <button className='informationBtn' onClick={handleSendInformation}>
      Enviar
    </button>
            </div>
        </form>
    </section>
  )
}
