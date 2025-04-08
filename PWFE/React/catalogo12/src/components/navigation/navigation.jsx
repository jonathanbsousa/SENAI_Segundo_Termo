import { estilo } from './navigation.module.css'

export function Navigation() {
    return (
        <nav className="container_navigation">
            <ul>
                <li>Home</li>
                <li>Filmes</li>
                <li>Perfil</li>
            </ul>
        </nav>
    )
}