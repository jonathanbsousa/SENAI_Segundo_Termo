import estilos from './BarraNavegacao.module.css';
import { Link } from 'react-router-dom'; 


//estrutura do componente
export function BarraNavegacao(){
    //eu só posso retornar 1 componente
    return(
       <nav className={estilos.conteiner}>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to ='serie'><li>Series</li></Link>
                <Link to='perfil'><li>Perfil</li></Link>
            </ul>
       </nav>
    )

}