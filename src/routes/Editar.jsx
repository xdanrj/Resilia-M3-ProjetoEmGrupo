import React from "react";
import axios from "axios";
import { useState } from "react";

import { EditarPost } from "../components/EditarPost";

const Editar = () => {
    return(
        <div>
            <h3>EDICAO JSON</h3>
            <EditarPost />
        </div>
    )
}

export default Editar;