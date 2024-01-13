import './Nav.scss';
import { Link } from 'react-router-dom';
function Nav() {

    return (
        <nav>
            <ul className='header-list'>
                <li> <Link to="/">  Accueil</Link></li>
                <li> <Link to="/about"> À Propos</Link> </li>
            </ul>
        </nav>
    )

}

export default Nav;