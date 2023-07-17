import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

import "./SendInformation.css";
import "./Information.css";
import logo from "../../assets/logoRandom.png";

//Validation function
function validate(input) {
  //va a recibir el estado input con los cambios detectados por los handlers
  let errors = {}; //objeto que guarda todos los errores y le agrego props con los nombres iguales a los del input
  if (!input.email) {
    errors.email = "Necesitás ingresar un mail";
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.email)) {
    errors.email = "Tiene que ser un mail válido";
  } else if (!input.name) {
    //si imput no tiene una prop name
    errors.name = "Necesitás ingresar un nombre"; //al obj errors le agrego una prop name q tiene un mensaje como valor
  } else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/.test(input.name)) {
    //regex solo acepta letras
    errors.name = "Solo se permiten letras";
  } else if (input.name.length < 2) {
    errors.name = "El nombre debe tener al menos 2 letras";
  }
  return errors; //se retorna el obj errors con la prop y el string correspondiente. ej: let errors ={name: 'a name is required'}
}

export default function SendInformation() {
  const form = useRef();
  const location = useLocation();
  const { km, food, read, total } = location.state || {};
  const [errors, setErrors] = useState({ e: "" });
  const [input, setInput] = useState({
    email: "",
    name: "",
  });

  //emailjs.send(serviceId, templateId, params, userId);
  //emailjs.send(service_l7jhk4f, template_c1tqs8t, params, userId);

  //Alert to confirm email was sent
  const emailSent = () => {
    Swal.fire({
      imageUrl: logo,
      imageHeight: 100,
      imageWidth: 100,
      imageAlt: "Logo RandomTrip.",
      title: "Tu información ha sido enviada correctamente.",
      html: "<h3>Que disfrutes de tu viaje!</h3y>",
      footer: "<p>Si te gustó la app, recomendásela a tus amig@s.</p>",
    });
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const message = `
      Estas son las pautas para tu próximo viaje
      
      * Tenés que hacer ${km} kilómetros
      * Tu opción de comida es ${food}
      * Tenés que ${read}
      * Tu presupuesto máximo es $${total}
  `;

    const params = {
      to_name: input.name,
      message: message,
      email: input.email,
    };

    emailjs
    .send("service_l7jhk4f", "template_c1tqs8t", params, 'nViH44IGuE5Jr6AvM')
    .then(
      (result) => {
        console.log(result.text);
        emailSent();
      },
      (error) => {
        console.log(error.text);
      }
    );
};

  return (
    <section className='SendInformation'>
      <form ref={form} onSubmit={sendEmail}>
        <img className='logoSend' src={logo} alt='logo' />
        <h1 className='informationTitle'>
          Estas son las pautas para tu próximo viaje
        </h1>
        <div className="infoTextWrapper">
          <h2 className='infoText'>Tenés que hacer {km} kilómetros</h2>
          <h2 className='infoText'>Tu opción de comida es {food}</h2>
          <h2 className='infoText'>Tenés que {read}</h2>
          <h2 className='infoText'>Tu presupuesto máximo es ${total}</h2>
        </div>
        <div className="inputContainer">
          <div className="inputDiv">
          <input
            type='name'
            name='name'
            id='name'
            value={input.name}
            placeholder='Ingresa tu nombre'
            onChange={(e) => handleChange(e)}
            // required
          />
          {errors.name && <p className='sendError'>{errors.name}</p>}
          </div>
          <div className="inputDiv">
          <input
            type='email'
            name='email'
            id='email'
            value={input.email}
            placeholder='Ingresa tu mail'
            onChange={(e) => handleChange(e)}
            // required
          />
          {errors.email && <p className='sendError'>{errors.email}</p>}
          </div>
        </div>
        <button className='sendInfoButton' type='submit'>
          Enviar
        </button>
      </form>
    </section>
  );
}
