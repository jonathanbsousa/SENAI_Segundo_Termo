import estilo from './navigation.module.css'

export function Navigation() {
    return (
        <nav className={estilo.container}>
            <ul>
                <li>Home</li>
                <li>Filmes</li>
                <li>Perfil</li>
            </ul>
        </nav>
    )
}