import React from "react";
import axios from "axios";
import { useState } from "react";
import { render } from 'react-dom';
import styles from "./Unidades.module.css";
import classnames from "classnames";

const PaginaUnidades = () => {
    return (
        <div className={styles.inicio}>
            <div className={styles.unidadesContainer}>
                
            <div className={styles.caixaUF}>
            <h1>Rio de Janeiro</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.5503384064295!2d-43.31949468537927!3d-23.003557047113635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd0a4d69ab861%3A0x9a17f8aec3f1e0fe!2sCinema%20Cinemark!5e0!3m2!1spt-BR!2sbr!4v1675374458312!5m2!1spt-BR!2sbr" width="300" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy">
            </iframe>
            </div>
            

            <div className={styles.caixaUF}>
            <h1>Brasília</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122846.2793183667!2d-48.21847916314705!3d-15.806789063303327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bccb8d789e6ed%3A0xabf057c93e1c102f!2sCineflix%20JK%20Shopping%20Brasilia!5e0!3m2!1spt-BR!2sbr!4v1675376842353!5m2!1spt-BR!2sbr" width="300" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy">
            </iframe>
            </div>

            <div className={styles.caixaUF}>
            <h1>São Paulo</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234056.7184931736!2d-46.91675687500003!3d-23.563550400000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c872682a63%3A0xeddb08caf1ea81ec!2sCinema%20Cinemark!5e0!3m2!1spt-BR!2sbr!4v1675378039561!5m2!1spt-BR!2sbr" width="300" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy">
            </iframe>
            </div>

            <div className={styles.caixaUF}>
            <h1>Belo Horizonte</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120054.6563134896!2d-44.03935191855157!3d-19.894547777789416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa697bf8f38ebbd%3A0x220d9762a9e946d7!2sCinema%20Cinemark!5e0!3m2!1spt-BR!2sbr!4v1675378285636!5m2!1spt-BR!2sbr" width="300" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy">
            </iframe>
            </div>
            </div>
        </div>
    )
}

export default PaginaUnidades