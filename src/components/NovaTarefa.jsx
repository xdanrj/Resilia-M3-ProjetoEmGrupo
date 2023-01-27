// RASCUNHO:
// "https://example-deploy-a-json-server.onrender.com/notas"
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ListarFilmes from "./ListarFilmes";
import blogFetch from "../axios/config";

export function NovaTarefa() {
  const [titulo, setTitulo] = useState("");
  const [ano, setAno] = useState();
  const [diretor, setDiretor] = useState();
  const [inputId, setInputId] = useState();
  const [url, setUrl] = useState()
  const [posts, setPosts] = useState([]);
  
  // PEGAR JSON E JOGAR NO posts
  const getPosts = async() => {
    try{
        const response = await blogFetch.get("/filmes");
   
        const data = response.data;
        console.log(data);

        setPosts(data);

    } catch (error) {
        console.log(error);
    }
};
useEffect(() => {
    
  getPosts()
}, []);


// POST NORMAL
  function postApi() {
    axios.post(`http://localhost:3000/filmes`, {
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
    axios.delete(`http://localhost:3000/filmes/${inputId}`)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

// UPDATE NORMAL
  function updateApi(){
    axios.put(`http://localhost:3000/filmes/${inputId}`, {
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

  /*selectElement = document.querySelector('#filmeSelecionado');
  output = selectElement.options[selectElement.selectedIndex].value;
  console.log(output);*/
  return (
    <div>
      <h5>Selecione um filme</h5>

       <select id="filmeSelecionado">
          {posts.map((post) => (
            <option>{post.titulo}</option>
            
      ))}
      </select>

      


      <input type='text' placeholder="Titulo" onChange={(e) => setTitulo(e.target.value)} />
      <input type='number' placeholder="Ano" onChange={(e) => setAno(e.target.value)} />
      <input type='text' placeholder="Diretor" onChange={(e) => setDiretor(e.target.value)} />
      <input type='text' placeholder="url" onChange={(e) => setUrl(e.target.value)} />
      <input type='number' placeholder="ID aqui" onChange={(e) => setInputId(e.target.value)} />
      <button onClick={postApi}>Enviar</button>
      
      
     
    </div>
  );
}


/* RASCUNHO (FUNCOES ALTERNATIVAS COMO DELETAR MULTIPLOS AO MESMO TEMPO)

<button onClick={deleteApiId}>Delete ID</button>
<button onClick={updateApi}>Update ID</button>


  // POST EM LOOP (ASYNC)
  let postApiLoop = async() =>{ 
    for(var indice= 0; indice < 10; indice++){
    axios.post("http://localhost:3000/filmes", {
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
      axios.delete(`http://localhost:3000/filmes/${indice}`)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}*/