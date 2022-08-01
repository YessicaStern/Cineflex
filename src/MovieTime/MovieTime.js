import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./MovieTime.css";


function Time({iten,setMovieDate,setMovieDay}){
    
    return(
    <div className="movie-time">
            <h3>{iten.weekday}- {iten.date}</h3>
            
                <div className="timeOption">
                    {iten.showtimes.map((a)=>(<Link to={`/assentos/${a.id}`}><div className="boxTime" onClick={()=>{setMovieDay(iten.weekday);setMovieDate(a.name)}}>{a.name}</div></Link>))}               
            </div>   
            
    </div>); 
}



export default function MovieTime({setMovieDate, setMovieDay}){
    
    

    const params=useParams();
    const [moviesTime,setMoviesTime]=React.useState([]);

    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${params.IdMovies}/showtimes`);
        promise.then((response)=>{setMoviesTime(response.data.days)});
        },[]);
    
    return(
    <div className="movieTime"> 
        <div className="watch"><h2>Selecione o horário</h2></div>
        
         {moviesTime.map((iten)=>(<Time iten={iten} setMovieDate={setMovieDate} setMovieDay={setMovieDay}/>))}
    </div>);
}