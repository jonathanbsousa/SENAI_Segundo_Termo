// structure react for components
import estilo from './header.module.css'

export function Header() {
    return (
        <header className={estilo.container}>
            <div className={estilo.header_logo}>

            </div>
            <div className={estilo.header_search}>

            </div>
            <div className={estilo.header_profile}>

            </div>
        </header>
    )
}