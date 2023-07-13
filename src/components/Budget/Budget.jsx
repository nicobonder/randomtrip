import React, { useEffect, useState } from 'react'
import CardBudget from './CardBudget';
import './Budget.css';

import { useContext } from 'react';
import { MyContext } from '../../myContext';

export default function Budget() {
  const [cards, setCards] = useState({//cada carta empieza con un state false y valor 0
    one: false,
    two: false,
    three: false,
    four: false,
    currentValue: 0
  })
  
  //sirve para cdo se hace la multiplicac del input * el valor de la carta
  // const [total, setTotal] = useState(0);
  const { total, setTotal } = useContext(MyContext);
  const [isDisabled, setIsDisabled] = useState(false);
  //toma el valor del input que es el presup minimo
  const [input, setInput] = useState({
    presupuestoMin: 0
  })

  const handleCard = (id, value) => {
    if (!cards[id] && !isDisabled) { // Check if the card is not already flipped and not disabled
      const newCards = {
        one: false,
        two: false,
        three: false,
        four: false,
        currentValue: 0
      };

      newCards[id] = true; //the flipped card is set to true
      newCards.currentValue = value; //the value of  newCard  is set to the value of the card flipped

      setCards(newCards);
      setIsDisabled(true); // Disable the remaining cards

    } 
  }

  //seteo el total. Voy a tener que setear el input con el handleChange y lo multiplico por el valor de la card. El value se establece en Card.
  useEffect(()=> {
    setTotal(input.presupuestoMin * cards.currentValue)
  }, [input.presupuestoMin, cards.currentValue])

  
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="sectionPresupuesto">
      <h2 className="presupuestoTitle">Elegí tu presupuesto máximo</h2>
      <p className='budgetText'>Tu presupesto total va a ser la multiplicación del mínimo que pongas y el número que te toque en la carta que elijas.</p>
      <label className="text" htmlFor="presupuestoMin">Tu presupuesto mínimo: </label>
      <input
        className="inputPres"
        type='number'
        min={0}
        name='presupuestoMin'
        value={input.presupuestoMin}
        placeholder='Cuál es tu presupuesto mínimo?'
        onChange={handleChange}
        id='presupuestoMin'
      />
        <ul className="cards">
         <CardBudget key='one' id='one' min='1' max='20' showNumber={cards.one} handleCard={handleCard} isDisabled={isDisabled} />
         <CardBudget key='two' id='two' min='1' max='20' showNumber={cards.two} handleCard={handleCard} isDisabled={isDisabled} />
         <CardBudget key='three' id='three' min='1' max='20' showNumber={cards.three} handleCard={handleCard} isDisabled={isDisabled} />
         <CardBudget key='four' id='four' min='1' max='20' showNumber={cards.four} handleCard={handleCard} isDisabled={isDisabled} />
        </ul>
      <div className="resultContainer">
        <h3 className="resultado"> Tu presupuesto total es ${total}</h3>
      </div>

    </div>
  )
}
