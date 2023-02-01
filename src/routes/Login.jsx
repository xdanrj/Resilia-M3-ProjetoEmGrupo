import React from "react";
import axios from "axios";
import { useState } from "react";

import { EditarPost } from "../components/EditarPost";
import { PaginaLogin } from "../components/PaginaLogin";

const Login = () => {
    return(
        <div>
            <h3>LOGIN</h3>
            <PaginaLogin />
            
            
        </div>
    )
}

export default Login;