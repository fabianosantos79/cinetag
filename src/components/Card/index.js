import { useContext } from 'react'
import styles from './Card.module.css'
import iconeFavoritar from './favorite_outline.png'
import { FavoritosContext, useFavoritoContext } from 'contextos/Favoritos'
import iconeDesfavoritar from './favorite.png'
import { Link } from 'react-router-dom'

function Card({ id, titulo, capa }) {
    const { favorito, adicionarFavorito } = useFavoritoContext()
    const ehFavorito = favorito.some(fav => fav.id === id);
    const icone = ehFavorito ? iconeDesfavoritar : iconeFavoritar;

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>
            <img src={icone} alt='Favoritar filme' className={styles.favoritar} onClick={() => {
                adicionarFavorito({ id, titulo, capa })
            }} />
        </div>
    )
}

export default Card