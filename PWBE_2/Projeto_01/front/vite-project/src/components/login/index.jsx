import React, {useState} from "react";
import './styles.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function Login(){
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const logar = async ()=>{
    try {
      const response = await axios.post(
          `http://127.0.0.1:8000/api/token/`,
          {
            username: user,
            password: password
          }
        )
        console.log("Token Login: ", response.data.access)
        localStorage.setItem("token", response.data.access)
        navigate("/home")
    } catch (error) {
      console.log("Error", error)
    }
  }

  return(
    <div className="container_login">
      <h1>Login</h1>
      <div className="caixa">
        
        <div className="usuario_input">
          <label>Usuário</label>
        <input type="text" placeholder="Usuário" value={user} onChange={(e)=>{setUser(e.target.value)}} />
        </div>
        
        <div className="usuario_input">
          <label>Senha</label>
          <input type="password" placeholder="Senha" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>

        <div className="btn_logar">
          <button className="btn" onClick={logar}>
            Logar
          </button>
        </div>
      </div>
    </div>
  )
}