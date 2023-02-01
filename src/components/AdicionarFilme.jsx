import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ListarFilmes from "./ListarFilmes";
import blogFetch from "../axios/config";
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import "./AdicionarFilme.css";

export function AdicionarFilme() {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const addPost = data => axios.post("https://resilia-m3-projetoindividual.onrender.com/filmes/", data)
    .then(() => {
        console.log("FILME ADICIONADO COM SUCESSO")
        
    })
    .catch(() => {
        console.log("ADICAO DE FILME FRACASSADA")
    })


return(
    <div>
        <main>
            <div className="form" >

                <div class="title">Adicionar filme</div>
                <div class="subtitle">Preencha as informações do filme</div>
                    <form onSubmit={handleSubmit(addPost)} >

                        <div className="input-container ic1" >
                            <label for="titulo" className="placeholder">Título</label>
                            <input type="text" name="titulo" className="inputCss" {...register("titulo")} />
                            
                            
                        </div>

                        <div className="input-container ic2" >
                            <label for="ano" className="placeholder">Ano</label>
                            <input type="text" name="ano" className="inputCss" {...register("ano")} />  
                            
                        </div>

                        <div className="input-container ic2" >
                            <label for="diretor" className="placeholder">Diretor</label>
                            <input type="text" name="diretor" className="inputCss" {...register("diretor")} />
                            
                            
                        </div>

                        <div className="input-container ic2" >
                            <label for="imagem" className="placeholder">Image</label>
                            <input type="text" name="img" className="inputCss" {...register("img")} />
                            
                        
                        </div>
                            <div className="botao">
                            <button type="submit" >Adicionar Filme</button>
                        </div>
                    </form>
                    
            </div>
        </main>
    </div>
  )
}