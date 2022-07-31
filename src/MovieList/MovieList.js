import "./MovieList.css";
import React, { useEffect } from "react";
import axios from "axios"

 function Movie({posterURL,iten}){
     return(
         <div className="boxMovie">
             <img src={posterURL} className="imgMovie" onClick={()=>{console.log(iten.id)}}/>
         </div>
     )
}


export default function MovieList(){
    const [movieList,setMovieList]=React.useState([]);

    useEffect(()=>{
        const promise = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");
        promise.then((response)=>{console.log(response.data);setMovieList(response.data)});
        },[]);
    
    return (
    <div className="movieList">
        <div className="watch-movie"><h2>Selecione o filme</h2></div>
        <div className="movie-list">
            {movieList.map((iten)=>(<Movie key={iten.id} iten={iten} posterURL={iten.posterURL} title={iten.title}/>))}
        </div>
    </div>)

}