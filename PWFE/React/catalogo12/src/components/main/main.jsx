import estilo from './main.module.css';
import { List } from '../list/list';

export function Main() {
    return (
        <main className={estilo.container}>
            <p>Main</p>
            <List />
        </main>
    )
}