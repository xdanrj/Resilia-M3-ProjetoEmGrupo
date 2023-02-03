import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import Logo from "../imagens/AeonCineLogo.png"

const Footer = () => {

    return (
        <div>
        <footer className={styles.footer}>
            <nav className={styles.foot}> 
                <div className={styles.footerBar}>
                
                <ul>
                    <li><Link to={`/`}><img src={Logo} className={styles.imgLogo} alt="" /></Link></li>
                    <li>Todos os direitos reservados.</li>
                   
                     
                </ul>
                </div>
            </nav>
        </footer>
        </div>
    )
}

export default Footer;