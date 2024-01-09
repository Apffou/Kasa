import './Header.scss';
import ImageLogo from '../../componentsBase/ImageLogo/ImageLogo';
function Header(){

return (
    <header>
      <ImageLogo logo="../images/logo-kasa.png" alt="logo kasa"></ImageLogo>
        <ul className='header-list'>
            <li><a href='#'>Accueil</a></li>
            <li><a href='#'>À Propos</a></li>
        </ul>
    </header>
)

}

export default Header;