import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from "react";

import './App.css';
import Top from '../Top/Top';
import MovieList from "../MovieList/MovieList";
import MovieTime from "../MovieTime/MovieTime";
import Places from "../Places/Places";
import Bottom from "../ Bottom/Bottom";

  

function App() {
  const [ok,setOk]=React.useState(false);
  const [nameMovie,setNameMovie]=React.useState("");
  const [urlMovie,setUrlMovie]=React.useState("");
  const [movieDate,setMovieDate]=React.useState("");
  const [movieDay,setMovieDay]=React.useState("");
  return (
    <> 
    <BrowserRouter>
      <Top/>
      <Routes>
        <Route path="/" element={<MovieList setOk={setOk} setNameMovie={setNameMovie} setUrlMovie={setUrlMovie} />} />
        <Route path="/sessao/:IdMovies" element={<MovieTime setOk={setOk} urlMovie={urlMovie} nameMovie={nameMovie} setMovieDate={setMovieDate} setMovieDay={setMovieDay}/>}/>
        <Route path="/assentos/:IdTime" element={<Places nameMovie={nameMovie} movieDay={movieDay}/>}/>
      </Routes>
      
      {ok ? (<Bottom nameMovie={nameMovie} urlMovie={urlMovie} movieDate={movieDate} movieDay={movieDay}/>):(console.log())}
    </BrowserRouter>
    
    </>
  );
}

export default App;