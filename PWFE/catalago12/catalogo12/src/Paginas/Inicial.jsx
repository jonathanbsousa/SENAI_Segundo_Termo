import { Cabecalho } from "../Componentes/Cabecalho";
import { BarraNavegacao } from "../Componentes/BarraNavegacao"
import { Outlet } from "react-router-dom";

//estrutura basica do React 
export function Inicial(){
    return(
        <>
            <BarraNavegacao />
            <Cabecalho />
            <Outlet />
        </>
    )

}