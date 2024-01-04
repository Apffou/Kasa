import './Header.scss';
function Header(){

return (
    <header>
        <div>
            <img src='../images/logo-kasa-mobile.png' />
        </div>
        <ul className='header-list'>
            <li>Accueil</li>
            <li>À Propos</li>
        </ul>
    </header>
)

}

export default Header;