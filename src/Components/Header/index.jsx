import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <span>Guilherme de Oliveira</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/sobre">About</Link>
                <Link to="/projetos">Projects</Link>
                <Link to="/contatos">Contacts</Link>
            </nav>
        </header>
    )    
}

export default Header
