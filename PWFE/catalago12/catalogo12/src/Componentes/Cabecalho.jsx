import estilo from './Cabecalho.module.css';
import  sol   from '../assets/sol.png'

//estrutura React para componentes
export function Cabecalho(){
    return(
        //para cada return eu so posso renderizar um unico componente
        <header className={estilo.conteiner}>
            <img src={sol}/>
            <h1>Ferflix</h1>
        </header>
    )

}