import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Logo from "../imagens/AeonCineLogo.png"

const Navbar = () => {

    return (
        <div>
        <header className={styles.header}>
            <nav className={styles.nav}> 
                <div className={styles.navBar}>
                
                <ul>
                    <li><Link to={`/`}><img src={Logo} className={styles.imgLogo} alt="" /></Link></li>
                    <li><Link to={`/catalogo`}>Catálogo</Link></li>
                    <li><Link to={`/unidades`}>Unidades</Link></li>
                    <li><Link to={`/adicionar`}>Adicionar</Link></li>
                    
                     
                </ul>
                </div>
            </nav>
        </header>
        </div>
    )
}

export default Navbar