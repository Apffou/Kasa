import './Nav.scss';
import { NavLink } from 'react-router-dom';
function Nav() {

    return (
        <nav>
            <ul className='header-list'>
                <li> <NavLink to="/" >  Accueil</NavLink></li>
                <li> <NavLink to="/about"> À Propos</NavLink> </li>
            </ul>
        </nav>
    )

}

export default Nav;