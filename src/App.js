import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Home from  './pages/PaginaHome/Home';
import PaginaExibicaoIndicadores from './pages/PaginaExibicaoIndicadores';
import PaginaFonteExterna from './pages/PaginaFonteExterna';
import PaginaFonteLocal from './pages/PaginaFonteLocal';




function App() {
//Enuqnato não tivermos  a rota, vamos usar essa constante aqui 

  //0 - home
  //1 - Input de csv
  //2 - Input de base externa
  //3 - Exibição dos indicadores

return(
<>


{/*  <Home/> 
 <PaginaFonteLocal/> 
 <PaginaFonteExterna/>  */}
 <PaginaExibicaoIndicadores />
 

   
  

  </>
)
}

export default App;
