// "https://resilia-m3-projetoindividual.onrender.com/"
//  "http://localhost:3000/"                    (/filmes)

import axios from "axios";

const blogFetch = axios.create({
    baseURL: "https://resilia-m3-projetoindividual.onrender.com/"
});

export default blogFetch;