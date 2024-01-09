import './Footer.scss';
import ImageLogo from '../../componentsBase/ImageLogo/ImageLogo';
function Footer() {
    return (
        <footer>
             <ImageLogo logo="../images/kasa-footer.png" alt="logo kasa"></ImageLogo>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;