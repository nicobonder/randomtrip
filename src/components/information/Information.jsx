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
        <h1 className='informationTitle'>Estas son las pautas para tu próximo viaje</h1>
        <form className='infoForm'>
            <h2 className='infoText'>Tenés que hacer {km} kilómetros</h2>
            <h2 className='infoText'>Tu opción de comida es {food}</h2>
            <h2 className='infoText'>Tenés que {read}</h2>
            <h2 className='infoText'>Tu presupuesto máximo es ${total}</h2>
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
