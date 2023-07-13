//Lo unico que devuelve este componente es un boton que activa todo lo de Presupuesto
import React, { useEffect, useRef, useState } from 'react';
import './Budget.css';

export default function CardBudget(props) {
  const [value, setValue] = useState(Math.floor(Math.random() * (20 - 1) + 1));
  const [isFlipped, setIsFlipped] = useState(false);
  const isFlippedRef = useRef(false);
  
  const onClickHandle = () => {
    if (!isFlippedRef.current && !props.isDisabled) { //as initial values is false in both cases
      props.handleCard(props.id, value); //if both are true the function handleCard is triggered
      setIsFlipped(true); //flipped state is set to true
      isFlippedRef.current = true; //current value of the useRef is updated
    }
  };

  return (
    <section className={`card ${isFlipped ? 'is-flipped' : ''} `}>
      <div className='card__inner' style={{transform: isFlipped ? 'rotateY(180deg)' : 'none'}}>
        <div className={`card__face ${isFlipped ? 'card__face__front' : 'card__face__back'} `}>
          <div className='card__content'>
            <button className='card__button' onClick={onClickHandle}> {isFlipped ? <div>{value}</div> : "?"}</button>
          </div>
        </div>
      </div>
    </section>
  );
}