import './Header.scss';
import Logo2 from '../../componentsBase/Logo2/Logo2';
function Header(){

return (
    <header>
      <Logo2 logo="../images/logo-kasa.png" alt="logo kasa"></Logo2>
        <ul className='header-list'>
            <li><a href='#'>Accueil</a></li>
            <li><a href='#'>À Propos</a></li>
        </ul>
    </header>
)

}

export default Header;