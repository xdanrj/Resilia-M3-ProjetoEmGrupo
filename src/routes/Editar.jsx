import React from "react";
import axios from "axios";
import { useState } from "react";

import { EditarPost } from "../components/EditarPost";
import "../components/EditarPost.module.css";

const Editar = () => {
    return(
        <div>
            <EditarPost />
        </div>
    )
}

export default Editar;