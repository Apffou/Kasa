import './Nav.scss';
import { Link } from 'react-router-dom';
function Nav() {

    return (
        <nav>
            <ul className='header-list'>
                <li> <Link to="/" className={(nav) => (nav.isActive ? "nav-active" : "")} >  Accueil</Link></li>
                <li> <Link to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}> À Propos</Link> </li>
            </ul>
        </nav>
    )

}

export default Nav;