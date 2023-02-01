import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import blogFetch from "../axios/config";
import "./ListarFilmes.css";

const ListarFilmes = () => {
    const [posts, setPosts] = useState([]);
    const [carrinho, setCarrinho] = useState([]);

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

    function ApagarFilme(id) {
        axios.delete(`https://resilia-m3-projetoindividual.onrender.com/filmes/${id}`)
        console.log("SUCESSO: filme deletado com sucesso");
  }

    return (
        
        <div>
            <div className="catalogo-container">
            {posts.length === 0 ? (<p>Carregando...</p>) : (
               posts.map((post) => (
                    <div className="catalogo-item" key={post.id}>
                        <div className="tituloDiv">
                        <h2>{post.titulo}</h2>
                        </div>
                        
                        <img src={post.img} className="poster" alt="" />
                        <h3>{post.diretor} | {post.ano}</h3>

                        <div className="botoes">
                        <Link to={{ pathname: `/editar/${post.id}` }}>
                        <button className="botaoEditar">Editar</button>
                        </Link>
                        <button onClick={() => ApagarFilme(post.id)}>Apagar</button>
                        </div>
                    </div>
                ))
            )}
            </div>

           
        </div>
    )
};

export default ListarFilmes;
