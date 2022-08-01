import { Link } from "react-router-dom";

import "./MovieList.css";
import React, { useEffect } from "react";
import axios from "axios";

 function Movie({posterURL,id,setOk,setNameMovie,title,setUrlMovie}){

     return(
        <Link to={`/sessao/${id}`}>
         <div className="boxMovie">
             <img src={posterURL} className="imgMovie" onClick={()=>{setOk(true);setNameMovie(title);setUrlMovie(posterURL)}}/>
         </div>
         </Link>
     )
}


export default function MovieList({setOk,setNameMovie,setUrlMovie}){
    const [movieList,setMovieList]=React.useState([]);

    useEffect(()=>{
        const promise = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");
        promise.then((response)=>{setMovieList(response.data)});
        },[]);
    
    return (
    <div className="movieList">
        <div className="watch"><h2>Selecione o filme</h2></div>
        <div className="movie-list">
            {movieList.map((iten)=>(<Movie key={iten.id} id={iten.id} posterURL={iten.posterURL} title={iten.title} setOk={setOk} setNameMovie={setNameMovie} setUrlMovie={setUrlMovie}/>))}
        </div>
    </div>)

}