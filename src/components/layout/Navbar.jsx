import styles from './Navbar.module.css';
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <ul className={styles.list}>
            <li className={styles.item}>
                <Link to="/">Home</Link>
            </li>

            <li className={styles.item}>
                <Link to="/cartaz">Cartaz</Link>
            </li>
        </ul>
    )
}

export default Navbar