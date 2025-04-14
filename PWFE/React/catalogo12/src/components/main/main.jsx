import estilo from './main.module.css';
import { List } from '../list/list';

export function Main() {
    return (
        <main className={estilo.container}>
            <div className={estilo.banner}>

            </div>
            <div className={estilo.list}>
                <List />
            </div>
        </main>
    )
}