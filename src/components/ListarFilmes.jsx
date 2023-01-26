import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import blogFetch from "../axios/config";

import "../ListarFilmes.css";

const ListarFilmes = () => {
    const [posts, setPosts] = useState([])

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
                        <h3>{post.diretor} - {post.ano}</h3>
                    </div>
                ))
            )}
            </div>
        </div>
    )
};


export default ListarFilmes;