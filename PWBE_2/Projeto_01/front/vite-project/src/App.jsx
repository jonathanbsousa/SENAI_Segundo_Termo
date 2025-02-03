import React from "react";
import './App.css';

export default function App(){
  return(
    <div className="container">
      <h1>Login</h1>
      <div className="caixa">
        
        <div className="usuario_input">
          <label>Usuário</label>
        <input type="text" placeholder="Usuário" />
        </div>
        
        <div className="usuario_input">
          <label>Senha</label>
          <input type="text" placeholder="Senha"/>
        </div>

      </div>
    </div>
  )
}