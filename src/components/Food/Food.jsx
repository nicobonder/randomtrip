import React, { useState, useEffect, useContext } from "react";
import { Wheel } from "react-custom-roulette";
import './Food.css'

import { MyContext } from '../../myContext';

const Food = ({ data }) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [rouletteData, setRouletteData] = useState(data);

  const { food, setFood } = useContext(MyContext);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  const getRandomSpinDuration = () => {
    const minDuration = 0.2;
    const maxDuration = 1.2;
    return Math.random() * (maxDuration - minDuration) + minDuration;
  };

  useEffect(() => {
    const selectedFood = data[prizeNumber]?.text || "";
    setFood(selectedFood);
  }, [prizeNumber, data, setFood]);

    useEffect(() => {
    const addShortString = data.map((item) => {
      return {
        completeOption: item.text,
        option:
          item.text.length >= 30
            ? item.text.substring(0, 30).trimEnd() + "..."
            : item.text
      };
    });
    setRouletteData(addShortString);
  }, [data]);

  const spinDuration = [getRandomSpinDuration()];

  return (
    <>
      <div align="center" className="roulette-container">
        <Wheel
          mustStartSpinning={mustSpin}
          spinDuration={spinDuration}
          prizeNumber={prizeNumber}
          data={rouletteData}
          outerBorderColor={["#ccc"]}
          outerBorderWidth={[7]}
          innerBorderColor={["#f2f2f2"]}
          radiusLineColor={["tranparent"]}
          radiusLineWidth={[1]}
          textColors={["#f5f5f5"]}
          textDistance={55}
          fontSize={[14]}
          backgroundColors={[
            "#3f297e",
            "#175fa9",
            "#169ed8",
            "#e5177b",
            "#be1180",
            "#871f7f"
          ]}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
        <button className="button roulette-button" onClick={handleSpinClick}>
          Girar
        </button>
      </div>
      <br />
      <div className="resultContainer">
        <h3 className="result"> {!mustSpin && data[prizeNumber] ? data[prizeNumber].text : "Girando"}</h3>
      </div>
      {/* <button
        className="prize-message"
        // onClick={handleSpinClick}
        // disabled={mustSpin}
      >
        {!mustSpin && data[prizeNumber] ? data[prizeNumber].text : "Girando"}
      </button> */}
    </>
  );
};

export default Food;

