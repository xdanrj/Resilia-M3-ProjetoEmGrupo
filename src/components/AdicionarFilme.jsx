import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ListarFilmes from "./ListarFilmes";
import blogFetch from "../axios/config";
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import styles from "./AdicionarFilme.module.css";
import classnames from "classnames";

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
            <div className={styles.form} >

                <div class={styles.title}>Adicionar filme</div>
                <div class={styles.subtitle}>Preencha as informações do filme</div>
                    <form onSubmit={handleSubmit(addPost)} >

                        <div className={classnames(styles.inputContainer, styles.ic1)} >
                            <label>Título</label>
                            <input type="text" name="titulo" className={styles.inputCss} {...register("titulo")} />
                             
                        </div>

                        <div className={classnames(styles.inputContainer, styles.ic2)} >
                            <label>Ano</label>
                            <input type="text" name="ano" className={styles.inputCss} {...register("ano")} />  
                            
                        </div>

                        <div className={classnames(styles.inputContainer, styles.ic2)} >
                            <label>Diretor</label>
                            <input type="text" name="diretor" className={styles.inputCss} {...register("diretor")} />
                            
                            
                        </div>

                        <div className={classnames(styles.inputContainer, styles.ic2)} >
                            <label>Imagem</label>
                            <input type="text" name="img" className={styles.inputCss} {...register("img")} />
                            
                        
                        </div>
                            <div className={styles.botaoAdicionar}>
                            <button type="submit" >Adicionar Filme</button>
                        </div>
                    </form>
                    
            </div>
        </main>
    </div>
  )
}
// RASCUNHO DE CADA LABEL: <label for="titulo" className={styles.placeholder}>