import React, { useState, useEffect } from "react";
import "./Kilometers.css";
import { useContext } from "react";
import { MyContext } from "../../myContext";

import airplane from "../../assets/airplane.png"
import { motion } from "framer-motion"
import Tooltip from "../../common/Tooltip/Tooltip";

export function validate(input) {
  let error = {
    min: "",
    max: "",
  };
  if (!input.min) {
    error.min = "Necesitás ingresar un número";
  } else if (!/^[0-9]{1,3}$/.test(input.min)) {
    error.min = "Tiene que ser un número entre 1 y 999";
  }

  if (!input.max) {
    error.max = "Necesitás ingresar un número";
  } else if (!/^[0-9]{1,3}$/.test(input.max)) {
    error.max = "Tiene que ser un número entre 1 y 999";
  } else if (parseInt(input.max) <= parseInt(input.min)) {
    error.max = "El máximo tiene que ser mayor al mínimo";
  }
  console.log(error);
  return error;
}

export default function Kilometros() {
  const { km, setKm } = useContext(MyContext);

  const [input, setInput] = useState({
    min: "",
    max: "",
  });
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitiste el formulario");
  };

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setError(validate(input));
  }, [input]); // Ejecuta la validación cuando el estado "input" cambie

  const gradientStyle = {
    fill: "url(#gradient)",
  };

  return (
    <section className="sectionKm">
      <Tooltip
        title = "Kilómetros aleatorios"
        content = "El número que salga representa la distancia aproximada que debería separarte del destino que elijas"
        divColor = "#000"
        borderColor = "#000"
      />
      <p className="kmText">
        En esta sección vamos a establecer cuántos kilómetros deberías llegar a
        tu próximo destino.
      </p>
      <form onSubmit={handleSubmit}>
        <p className="kmText">
          Primero decinos cuántos kilómetros querés viajar como mínimo y como
          máximo. Después hace click en Calcular
        </p>
        <div className="inputs">
          <div>
            <input
              type="text"
              name="min"
              value={input.min}
              placeholder="Kilómetros mínimos"
              onChange={handleInputChange}
              className={`${error.min ? 'danger' : ''}`}
              id="minId"
            />
            {error.min && <p className="errorMessage">{error.min}</p>}
          </div>
          <div>
            <input
              type="text"
              name="max"
              value={input.max}
              placeholder="Kilómetros máximos"
              onChange={handleInputChange}
              className={`${error.max ? 'danger' : ''}`}
              id="maxId"
            />
            {error.max && <p className="errorMessage">{error.max}</p>}
          </div>
        </div>
        <button
          className="kmButn"
          disabled={
            !input.min ||
            !input.max ||
            !(parseInt(input.min) < parseInt(input.max))
          }
          onClick={() =>
            setKm(
              Math.floor(
                Math.random() * (parseInt(input.max) - parseInt(input.min) + 1)
              ) + parseInt(input.min)
            )
          }
        >
          Calcular
        </button>
        <div className="resultContainer">
          <h3 className="resultTitle">Tenés que viajar:</h3>
          <p className="show">{km} kilómetros</p>
        </div>
      </form>
      <motion.img className="airplane" src={airplane}
        animate={{ x: ["100%", "180%"], y: ["10%", "-120%"] }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </section>
  );
}
