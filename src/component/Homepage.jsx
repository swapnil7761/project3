import { useState } from "react";
import styles from "./Homepage.module.css";
import React from "react";
import PlayScreen from "./PlayScreen";

const Homepage = () => {
  const [start, setStart] = useState(false);

  return (
    <>
      {start ? (
        <PlayScreen />
      ) : (
        <section className={`container ${styles.homepage}`}>
          <div>
            <img src="./images/dices.png" alt="cover photo of dice game" />
          </div>
          <div className={styles.startsection}>
            <h1>DICE GAME</h1>
            <button
              className={styles.startbtn}
              onClick={() => {
                setStart(true);
              }}
            >
              Play Now
            </button>
          </div>
        </section>
      )}
    </>
  );
};

export default Homepage;
