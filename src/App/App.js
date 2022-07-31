import {BrowserRouter, Routes, Route} from "react-router-dom";


import './App.css';
import Top from '../Top/Top';
import MovieList from "../MovieList/MovieList";


function App() {
  return (
    <> 
    <BrowserRouter>
      <Top/>
      <Routes>
        <Route path="/" element={<MovieList/>} />
      </Routes>
      
    </BrowserRouter>
    
    </>
  );
}

export default App;
