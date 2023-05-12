import { Link } from 'react-router-dom'
import styles from './Cabecalho.module.css'
import Logo from './Logo-cinetag-branco 1.png'
import CabecalhoLink from 'components/CabecalhoLink'

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to='./'>
                <img src={Logo} alt='Logo do Cinetag' />
            </Link>
            <nav>
                <CabecalhoLink url={'./'}>
                    Home
                </CabecalhoLink>
                <CabecalhoLink url={'/favoritos'}>
                    Favoritos
                </CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho