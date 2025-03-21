import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from "./pages/login";
import Disciplina from "./pages/disciplinas";
import Professor from "./pages/professor";
import Home from "./pages/home";

export default function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/professor" element={<Professor/>}/>
        <Route path="/disciplinas" element={<Disciplina/>}/>
      </Routes>
    </Router>
  )
}