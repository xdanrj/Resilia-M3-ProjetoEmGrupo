// RASCUNHO:
// "https://example-deploy-a-json-server.onrender.com/notas"

import axios from "axios";
import { useState } from "react";

export function NovaTarefa() {
  const [titulo, setTitulo] = useState("");
  const [ano, setAno] = useState();
  const [diretor, setDiretor] = useState();
  const [inputId, setInputId] = useState();
  const [url, setUrl] = useState()
  

// POST NORMAL
  function postApi() {
    axios.post(`https://example-deploy-a-json-server.onrender.com/notas`, {
      titulo: titulo,
      ano: ano,
      diretor: diretor
    })
    .then((result) => {
      console.log(result);
      console.log(`valor atual do inputid: ${inputId}`);
    })
    .catch((err) => {
      console.log(err);
    });
  }

// DELETE NORMAL
  function deleteApiId() {
    axios.delete(`https://example-deploy-a-json-server.onrender.com/notas/${inputId}`)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

// UPDATE NORMAL
  function updateApi(){
    axios.put(`https://example-deploy-a-json-server.onrender.com/notas/${inputId}`, {
      titulo: titulo,
      ano: ano,
      diretor: diretor,
      url: url
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  }

   // POST EM LOOP (ASYNC)
   let postApiLoop = async() =>{ 
    for(var indice= 0; indice < 10; indice++){
    axios.post("https://example-deploy-a-json-server.onrender.com/notas", {
      titulo: "youtube.com/XDanRJ",
      testando: "aa"
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  }}

  // DELETE EM LOOP (ASYNC)
  let deleteApiLoop = async() =>{
    for(var indice= 0; indice < 10; indice++){
      axios.delete(`https://example-deploy-a-json-server.onrender.com/notas/${indice}`)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}


  return (
    <div>
      <h1>{titulo}</h1>
      <input type='text' placeholder="Titulo" onChange={(e) => setTitulo(e.target.value)} />
      <input type='number' placeholder="Ano" onChange={(e) => setAno(e.target.value)} />
      <input type='text' placeholder="Diretor" onChange={(e) => setDiretor(e.target.value)} />
      <input type='text' placeholder="url" onChange={(e) => setUrl(e.target.value)} />
      <input type='number' placeholder="ID aqui" onChange={(e) => setInputId(e.target.value)} />
      <button onClick={postApi}>Enviar</button>
      <button onClick={deleteApiId}>Delete ID</button>
      <button onClick={updateApi}>Update ID</button>
      <button onClick={deleteApiLoop}>Deletar 10x</button>
      <button onClick={postApiLoop}>Postar 10x</button>
     
    </div>
  );
}
