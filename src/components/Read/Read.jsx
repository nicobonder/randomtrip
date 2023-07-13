import React, { useState, useEffect } from "react";
import s from "./read.module.css";

import { useContext } from "react";
import { MyContext } from "../../myContext";

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
    <div className={s.sectionRead}>
      <h2 className={s.readTitle}>
        Vas a investigar o te vas a dejar sorprender?
      </h2>
      <p className={s.textRead}>
        Tirá la moneda y si te aparece la Estatua te ponés a leer sobre tu
        próximo destino, y si te sale Washington, te dejás llevar.
      </p>

      <div className={s.coinContainer}>
        <div
          className={`${s.coin} ${face === "faceOne" ? s.animateFaceOne : s.animateFaceTwo} ${isFlipped ? s.startAnimation : ""}`}
          onClick={flipCoin}
        >
          <div className={s.faceOne}></div>
          <div className={s.faceTwo}></div>
        </div>
      </div>

      <button id="flip" className={s.flipBtn} onClick={flipCoin}>
        Lanzame!
      </button>

      <div className={s.resultContainer}>
        <p id="status" className={s.result}>
          {status}
        </p>
      </div>
    </div>
  );
}
