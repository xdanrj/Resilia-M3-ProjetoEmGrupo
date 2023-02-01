import styles from './Navbar.css';
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div>
        <ul className="navbar">
            <li className="navbar-item">
                <Link to="/">Home</Link>
            </li>

            <li className="navbar-item">
                <Link to="/cartaz">Cartaz</Link>
            </li>

            <li className="navbar-item">
                <Link to="/adicionar">Adicionar</Link>
            </li>

            <li className="navbar-item">
                <Link to="/login">Login</Link>
            </li>
        </ul>
        </div>
    )
}

export default Navbar