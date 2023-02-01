// RASCUNHO:
// "https://example-deploy-a-json-server.onrender.com/notas"
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ListarFilmes from "./ListarFilmes";
import blogFetch from "../axios/config";
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export function EditarPost() {
  const { id } = useParams();
  
  const addPost = data => axios.put(`https://resilia-m3-projetoindividual.onrender.com/filmes/${id}`, data)
  .then(() => {
      console.log("Deu tudo certo")
      
  })
  .catch(() => {
      console.log("DEU ERRADO")
  })

  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  useEffect(() => {
      axios.get(`https://resilia-m3-projetoindividual.onrender.com/filmes/${id}`)
      .then((response) => {
          reset(response.data)
      })
      
  }, [])

  function ApagarFilme(id) {

        axios.delete(`https://resilia-m3-projetoindividual.onrender.com/filmes/${id}`)


  }


  return(
    <div>
        
            <div className="cartao-post" >

                <h1>EDITAR JSON</h1>
                <div className="linha-post" ></div>

                <div className="cartao-post-corpo" >

                    <form onSubmit={handleSubmit(addPost)} className="formulario" >

                        <div className="campo" >
                            <label>Título</label>
                            <input type="text" name="titulo" {...register("titulo")} />
                        </div>

                        <div className="campo" >
                            <label>Ano</label>
                            <input type="text" name="ano" {...register("ano")} />
                        </div>

                        <div className="campo" >
                            <label>Diretor</label>
                            <input type="text" name="diretor" {...register("diretor")} />
                        </div>

                        <div className="campo" >
                            <label>Imagem</label>
                            <input type="text" name="img" {...register("img")} />
                        </div>

                        <button type="submit" >Editar Filme</button>
                        
                    
                    </form>
                    <button onClick={() => ApagarFilme(id)}>Apagar Filme</button>
                </div>
            </div>
        
    </div>
  )
}