import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import blogFetch from "../axios/config";
import "../ListarFilmes.css";
//import AdicionarCarrinho from "./Carrinho"; 

const ListarFilmes = () => {
    const [posts, setPosts] = useState([]);
    const [carrinho, setCarrinho] = useState([]);
    
   
    function AdicionarCarrinho(id) {
        const filme = posts.find((filme) => filme.id === id);
        const jaEstaNoCarrinho = carrinho.find(
            (item) => item.produto.id === id
            );

            // SE JA ESTA NO CARRINHO
            if (jaEstaNoCarrinho) {
                const novoItem = carrinho.map((item) => {
                    if (item.produto.id === id)
                    ({
                        ...item
                    });
                    return item;
                });
                setCarrinho(novoItem);
                return;
            }

            // SE NAO ESTA NO CARRINHO AINDA

        const carrinhoItem = {
            titulo: filme.titulo,
            //quantidade: quantidade + 1
        }
        const novoItem = [...carrinho, carrinhoItem];
        setCarrinho(novoItem);
        console.log(`ID: ${id}`);
        console.log(carrinho);
    }

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


    return (
        
        <div>
            <div className="catalogo">
            {posts.length === 0 ? (<p>Carregando...</p>) : (
               posts.map((post) => (
                    <div className="post" key={post.id}>
                        <h2>{post.titulo}</h2>
                        <img src={post.img} className="poster" alt="" />
                        <h3>{post.diretor} | {post.ano}</h3>
                    
                    </div>
                ))
            )}
            </div>

            <div className="carrinho">
              
                <ul>
                    {carrinho.map((item) => (
                    <li>
                        <p>Filme: {item.titulo}</p>
                        <p>Diretor:{item.diretor}</p>
                        <p>Ano:{item.ano}</p>
                    </li>
                    ))}
                    </ul>
                
        </div>
        </div>
    )
};


export default ListarFilmes;

/* RASCUNHO
<button onClick={() => AdicionarCarrinho(post.id)}>+</button>
*/