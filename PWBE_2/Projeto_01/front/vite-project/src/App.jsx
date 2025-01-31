import React from "react";
import './App.css';

export default function App(){
  return(
    <div className="container">
      <h1>Login</h1>
      <div className="caixa">

      <label>Usuário</label>
      <input type="text" placeholder="User" className="input_user"/>
      
      <label>Senha</label>
      <input type="password" placeholder="Senha" className="input_user"/>

      </div>
    </div>
  )
}