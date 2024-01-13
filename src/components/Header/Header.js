import './Header.scss';
import ImageLogo from '../../componentsBase/ImageLogo/ImageLogo';
import Nav from '../../componentsBase/Nav/Nav';
function Header() {

    return (
        <header>
            <ImageLogo logo="../images/logo-kasa.png" alt="logo kasa"></ImageLogo>
            <Nav />
        </header>
    )

}

export default Header;