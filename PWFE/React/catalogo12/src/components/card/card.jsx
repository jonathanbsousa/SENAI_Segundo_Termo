import estilo from './card.module.css'

export function Card({ movie }) {
    return (
        <div className={estilo.container}>
            <h3>{movie.title}</h3>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        </div>
    )
}