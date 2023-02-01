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
        console.log("POSTado COM SUCESSO")
        
    })
    .catch(() => {
        console.log("POST FRACASSADO")
    })


return(
    <div>
        <main>
            <div className="form" >

                <div class="title">Adicionar filme</div>
                <div class="subtitle">Preencha as informações do filme</div>
                    <form onSubmit={handleSubmit(addPost)} >

                        <div className="input-container ic1" >
                            <input type="text" name="titulo" className="inputCss" {...register("titulo")} />
                            <label for="titulo" className="placeholder">Título</label>
                            
                        </div>

                        <div className="input-container ic2" >
                        <input type="text" name="ano" className="inputCss" {...register("ano")} />
                            <label for="ano" className="placeholder">Ano</label>
                            
                        </div>

                        <div className="input-container ic2" >
                        
                        <input type="text" name="diretor" className="inputCss" {...register("diretor")} />
                            <label for="diretor" className="placeholder">Diretor</label>
                            
                        </div>

                        <div className="input-container ic2" >
                            
                        
                        <input type="text" name="img" className="inputCss" {...register("img")} />
                        <label for="imagem" className="placeholder">Image</label>
                        
                        </div>

                        <button type="submit" >Adicionar Filme</button>
                        
                    </form>
                    
                
            </div>
        </main>
    </div>
  )
}