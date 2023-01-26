import React from "react";
import axios from "axios";
import { useState } from "react";

import { NovaTarefa } from "../components/NovaTarefa";

const Editar = () => {
    return(
        <div>
            <h3>EDICAO JSON</h3>
            <NovaTarefa />
        </div>
    )
}

export default Editar;