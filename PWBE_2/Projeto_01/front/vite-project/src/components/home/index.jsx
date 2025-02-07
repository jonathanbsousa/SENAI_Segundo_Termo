import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaPlus, FaSearch } from 'react-icons/fa'
import './styles.css';


export default function Home() {

    const [dados, setDados] = useState([])
    const token = localStorage.getItem("token")
    console.log("Token Home: ", token)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/professores`,
                    {
                        headers: { Authorization: `Bearer ${token}` }
                    }
                )
                console.log("Dados do Lindomar",response.data)
                setDados(response.data)

            } catch (error) {
                console.log("Error: ", error)
            }

        }
        fetchData()
    }, [dados])

    const apagar = async (id) => {
        if(window.confirm("Tem certeza?")){
            try {
                await axios.delete(`http://127.0.0.1:8000/api/professor/${id}`,
                    {
                        headers:{
                            Authorization: `Bearer ${token}`
                        }
                    }
                )
                setDados(dados.filter((professor) => {professor.id !== id}))
            } catch (error) {
                console.error("Error:", error)                
            }
        }
    }

    return (
        <html lang="pt-br">
            <body>
                <div className="container_home">

                    <header>
                        <div className="header_container">
                            <h1>Lista de Professores</h1>
                        </div>

                    </header>

                    <main>
                        <div className="flex_list">
                        {dados.map((professor) => (
                                <div className="lista" key={professor.id}>
                                    <FaEdit className="edit" />
                                    <FaTrash className="delete" />
                                    <span className="id">{professor.id}</span>
                                    <span className="ni">{professor.ni}</span>
                                    <span className="nome">{professor.nome}</span>
                                    <span className="email">{professor.email}</span>
                                    <span className="tel">{professor.tel}</span>
                                    <span className="ocupacao">{professor.ocupacao}</span>
                                </div>
                            ))}
                        </div>
                    </main>
                        

                    <footer>
                        <div className="flex_footer">
                            <div className="btn1">
                                <FaPlus className="adicionar" onClick={() => {apagar(professor.id)}}/>
                            </div>
                            <div className="pesquisar">
                                <input type="text" placeholder="id"/>
                            </div>
                            <div className="btn2">
                                <FaSearch className="procurar"/>
                            </div>
                        </div>
                    </footer>

                </div>
            </body>
        </html>
    )
}