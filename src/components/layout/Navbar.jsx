import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <div>
        <header className={styles.header}>
            <nav className={styles.nav}> 
                <div className={styles.navBar}>
                
                <ul>
                    <li><Link to={`/cartaz`}>Cartaz</Link></li>
                    <li><Link to={`/adicionar`}>Adicionar</Link></li> 
                </ul>
                </div>
            </nav>
        </header>
        </div>
    )
}

export default Navbar