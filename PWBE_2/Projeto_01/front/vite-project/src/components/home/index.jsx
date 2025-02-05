import axios from "axios";
import React, {useState, useEffect} from "react";

export default function Home(){

    const token = localStorage.getItem("token")
    console.log("Token Home: ", token)

    useEffect(() => {
            const fetchData = async () =>{
                try {
                    const response = await axios.get(`http://127.0.0.1:8000/api/professores`)
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                } catch (error) {
                    
                }
                
            }
    }, [])

    return(
        <>
        <h1>HOME</h1>
        </>
    )
}