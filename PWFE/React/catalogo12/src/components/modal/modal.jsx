import estilo from './modal.module.css'

export function Modal({ movie, onCloseModal }) {

    return (
        <>
            <div className={estilo.modal_back}>
                <div className={estilo.modal_container}>
                    <h2>{movie.title}</h2>
                    <button onClick={onCloseModal} >X</button>
                    <img className={estilo.img_details} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                    <p>{`Popularity: ${movie.popularity}`}</p>
                    <p>{`Realise Date: ${movie.realise_date}`}</p>
                    <p>{`Vote Count: ${movie.vote_count}`}</p>
                    <p>{`Overview: ${movie.overview}`}</p>
                </div>
            </div>
        </>
    )
}