import React from "react";

import axios from "axios";
import { useState } from "react";
import { NovaTarefa } from "../components/NovaTarefa";

import ListarFilmes from '../components/ListarFilmes'

const Cartaz = () => {
    return(
        <div>
            <h3>EM CARTAZ</h3>
            <p>Filmes:</p>
            <ListarFilmes />

        </div>
    )
}

export default Cartaz;
