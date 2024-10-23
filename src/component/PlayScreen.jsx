import React from "react";
import styles from "./PlayScreen.module.css";
import { useState, useEffect, useRef } from "react";

const PlayScreen = () => {
  const [rule, setRule] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const diceimg = useRef();
  const rulebook = useRef();

  const handleruleclick = () => {
    setRule((r) => !r);
  };
  useEffect(() => {
    if (rule && rulebook.current) {
      rulebook.current.focus();
    }
  }, [rule]);
  let userinput;
  const handlerolldice = () => {
    if (selectedNumber) {
      let random = Math.floor(Math.random() * 6) + 1;
      diceimg.current.src = `./images/dice_${random}.png`;
      if (selectedNumber === random) {
        setScore((s) => s + selectedNumber);
      } else {
        setScore((s) => s - 2);
      }
    }
  };

  return (
    <section className={styles.playscreen}>
      <div className={styles.scorebar}>
        <div className={styles.score}>
          <h1>{score}</h1>
          <p>total score</p>
        </div>
        <div className={styles.select}>
          <div>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div
                key={num}
                className={`${
                  selectedNumber === num
                    ? styles.userselected // Highlight selected number
                    : styles.usernotselect // Style for unselected numbers
                }`}
                onClick={() => setSelectedNumber(num)} // Set selected number
              >
                {num}
              </div>
            ))}
          </div>
          <p>please select number</p>
        </div>
      </div>
      <div className={styles.rolldice}>
        <div onClick={handlerolldice}>
          <img ref={diceimg} src={`./images/dice_1.png`} alt="result dice" />
        </div>
        <h1>click on dice to roll</h1>
        <button
          onClick={() => {
            setScore(0);
          }}
        >
          Reset score
        </button>
        <button onClick={handleruleclick}>
          {rule ? "Hide rules" : "Show rules"}
        </button>
      </div>
      {rule ? (
        <div ref={rulebook} className={styles.rulebook}>
          <h1>How to play dice game</h1>
          <p>Select any number</p>
          <p>Click on dice image</p>
          <p>
            after click on dice if selected number is equal to dice number you
            will get same point as dice{" "}
          </p>
          <p>if you get wrong guess then 2 point will be dedcuted </p>
        </div>
      ) : null}
    </section>
  );
};

export default PlayScreen;
