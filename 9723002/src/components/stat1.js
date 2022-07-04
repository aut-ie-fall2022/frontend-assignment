import React from "react";
import styles from "../css/main.module.css";

export default function stat1({ mode, func }) {
  return (
    <div className={styles.body}>
      <div className={styles.sec}>
        <h1 className={styles.titleOfh1}>Star War Movies</h1>
        <ul>
          {mode.allmovies.map((e, index) => {
            return (
              <li className={styles.li} key={index}>
                <div className={styles.movie}>
                  <div className={styles.movie2}>
                    <p>{e.title}</p>
                    <p>{e.episode_id}</p>
                    <p>{e.release_date}</p>
                  </div>
                  <button className={styles.b} onClick={() => func(e)}>
                    StarShips
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
