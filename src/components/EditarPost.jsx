// RASCUNHO:
// "https://example-deploy-a-json-server.onrender.com/notas"
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ListarFilmes from "./ListarFilmes";
import blogFetch from "../axios/config";
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styles from "./EditarPost.module.css";

export function EditarPost() {
  const { id } = useParams();
  
  const addPost = data => axios.put(`https://resilia-m3-projetoindividual.onrender.com/filmes/${id}`, data)
  .then(() => {
      console.log("SUCESSO: filme editado")
      
  })
  .catch(() => {
      console.log("FRACASSO: edicao de filme fracassada")
  })

  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  useEffect(() => {
      axios.get(`https://resilia-m3-projetoindividual.onrender.com/filmes/${id}`)
      .then((response) => {
          reset(response.data)
      })
      
  }, [])

  function ApagarFilme(id) {
        axios.delete(`https://resilia-m3-projetoindividual.onrender.com/filmes/${id}`);
        console.log("SUCESSO: filme deletado com sucesso")
  }


  return(
    <div>
        <main>
        <div className={styles.form} >
        <div className={styles.title}>Editar filme</div>
                <div className={styles.subtitle}>Edite as informações do filme</div>

                    <form onSubmit={handleSubmit(addPost)} className={styles.formulario} >

                        <div className="input-container ic1"  >
                            <label>Título</label>
                            <input type="text" name="titulo" className="inputCss" {...register("titulo")} />
                        </div>

                        <div className="input-container ic2"  >
                            <label>Ano</label>
                            <input type="text" name="ano" className="inputCss" {...register("ano")} />
                        </div>

                        <div className="input-container ic2"  >
                            <label>Diretor</label>
                            <input type="text" name="diretor" className="inputCss" {...register("diretor")} />
                        </div>

                        <div className="input-container ic2"  >
                            <label>Imagem</label>
                            <input type="text" name="img" className="inputCss" {...register("img")} />
                        </div>
                    
                    </form>

                    <div className={styles.botoes}>
                    <button type="submit" className={styles.botaoEditar}>Editar Filme</button>
                    <button onClick={() => ApagarFilme(id)}>Apagar Filme</button>
                    </div>
            </div>
        </main>
    </div>
  )
}