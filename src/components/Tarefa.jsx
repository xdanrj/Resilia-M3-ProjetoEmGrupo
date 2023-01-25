import React from "react";
import styles from "./tarefa.module.css";

function Tarefa({ titulo }) {
  return (
    <article className={styles.tarefa} role='task' aria-labelledby='title'>
      <label id='title' htmlFor='status'>
        {titulo}
      </label>
      <input id='status' type='checkbox' />
    </article>
  );
}

export default Tarefa;
