import React from "react";
import axios from "axios";
import { useState } from "react";
import Cinema from "../components/imagens/cinema.jpg";
import styles from "./Home.module.css";


const PaginaHome = () => {
    return(
        <div className={styles.inicio}>
            <h1>AEON CINE</h1>
            <h2>O cinema não tem fronteiras nem limites. É um fluxo constante de sonho.</h2>
            <img src={Cinema} alt="" />
        </div>
    )
}

export default PaginaHome;