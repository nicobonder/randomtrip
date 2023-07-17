import React, { useState, useEffect } from "react";
import "./read.css";

import { useContext } from "react";
import { MyContext } from "../../myContext";
import Tooltip from "../../common/Tooltip/Tooltip";

export default function Read() {
  const [face, setFace] = useState(null);
  const [status, setStatus] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);
  const { read, setRead } = useContext(MyContext);

  function flipCoin() {
    setFace(null);
    const random = Math.random();
    const result = random < 0.5 ? "faceOne" : "faceTwo";
    setFace(result);
    setIsFlipped(true);
  }

  useEffect(() => {
    if (face) {
      const timeout = setTimeout(() => {
        if (face === "faceTwo") {
          setStatus("Leer sobre tu destino");
        } else {
          setStatus("Dejarte sorprender");
        }
      }, 2000);

      if (status !== "") {
        setRead(status);
      }

      return () => clearTimeout(timeout);
    }
  }, [face, status, setRead]);

  return (
    <div className="sectionRead">
      <Tooltip
        title = "¿Vas a investigar o te vas a dejar sorprender?"
        content = "Algunos prefieren saber todo antes de llegar a un lugar, otros no leen nada y se sorprenden al llegar. La moneda va a decidir qué tenés que hacer"
        divColor = "#000"
        borderColor = "#000"
        // top = "-90px"
        // left = "-220%"
      />
      <p className="textRead">
        Tirá la moneda y si te aparece la Estatua te ponés a leer sobre tu
        próximo destino, y si te sale Washington, te dejás llevar.
      </p>

      <div className="coinContainer">
      <div
  className={`coin ${face === "faceOne" ? "animateFaceOne" : "animateFaceTwo"} ${isFlipped ? "startAnimation" : ""}`}
  onClick={flipCoin}
>
          <div className="faceOne"></div>
          <div className="faceTwo"></div>
        </div>
      </div>

      <button id="flip" className="flipBtn" onClick={flipCoin}>
        Lanzame!
      </button>

      <div className="resultContainer">
        <p id="status" className="result">
          {status}
        </p>
      </div>
    </div>
  );
}
