import React from "react";
import styles from "../css/main.module.css";

export default function stat3({ mode, setname, setmode, pageup, pagedown }) {
  return (
    <div className={styles.body}>
      <div className={styles.sec}>
        <h1 className={styles.titleOfh1}>{mode.selectedmovie.title}</h1>
        <div className={styles.star}>
          <div className={styles.col1}>
            <div className={styles.row1}>
              <button
                className={styles.b}
                onClick={() =>
                  setmode({
                    ...mode,
                    stat: 0,
                    selectedmovie: [],
                    selectedship: [],
                    page: 0,
                  })
                }
              >
                Back to Movies Menu
              </button>
              <ul>
                {mode.selectedship
                  .slice(mode.page * 10, mode.page * 10 + 10)
                  .map((element, index) => (
                    <li className={styles.li2} key={index}>
                      <button
                        className={styles.b}
                        onClick={() => setname(element)}
                      >
                        {element.name}
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
            <div className={styles.row2}>
              <div className={styles.butd}>
                <button className={styles.b} onClick={pagedown}>
                  Previous
                </button>
                <p className={styles.parag}>Page {mode.page + 1}</p>
                <button className={styles.b} onClick={pageup}>
                  Next
                </button>
              </div>
            </div>
          </div>
          <div className={styles.col2}>
            <div>
              <h1 className={styles.header}>{mode.ship.name}</h1>
              <ul>
                <li className={styles.li3}>Model : {mode.ship.model}</li>
                <li className={styles.li3}>
                  Passengers : {mode.ship.passengers}
                </li>
                <li className={styles.li3}>Crew : {mode.ship.crew}</li>
                <li className={styles.li3}>
                  Passengers : {mode.ship.passengers}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
