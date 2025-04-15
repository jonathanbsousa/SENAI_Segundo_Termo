import estilo from './navigation.module.css'
import { Link } from 'react-router-dom'

export function Navigation() {
    return (
        <nav className={estilo.container}>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="series"><li>Filmes</li></Link>
                <Link to="profile"><li>Perfil</li></Link>
            </ul>
        </nav>
    )
}