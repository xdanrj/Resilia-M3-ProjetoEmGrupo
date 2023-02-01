import React from "react";

import axios from "axios";
import { useState } from "react";
import { EditarPost } from "../components/EditarPost";

import ListarFilmes from '../components/ListarFilmes';


const Cartaz = () => {
    return(
        <div>
            
            <ListarFilmes />

        </div>
    )
}

export default Cartaz;
