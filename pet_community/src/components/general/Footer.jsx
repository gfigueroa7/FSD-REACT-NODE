import { Link } from 'react-router-dom';

function Footer() {
    let token = sessionStorage.getItem('token');
    
    return (
        <footer className="footer">
            <div className="footer__heading">
                <Link to="/"><img src={require('./../../assets/img/logo-white-pet.png')} alt="Logo del sitio" /></Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quidem asperiores dignissimos consectetur cumque magnam!</p>
                <p>Facilis aliquam atque illum ut reprehenderit similique nisi, delectus, eaque consequatur aut nesciunt nihil exercitationem!</p>
            </div>
            <div className="footer__navigation">
                <nav className="footer__nav" id="nav">
                    <ul className="footer__list">
                        <li><Link to="/veterinarias">Veterinarias</Link></li>
                        <li><Link to="/tiendas">Tiendas</Link></li>
                        <li><Link to="/entrenadores">Entrenadores</Link></li>
                        {
                            token ? <li><Link to="/comunidad">Comunidad</Link></li> : <li><Link to="/login">Comunidad</Link></li>
                        }
                        <li><Link to="/postularse">Postularse</Link></li>
                        <li><Link to="/sponsor">Sponsor</Link></li>
                        <li><Link to="/ranking">Ranking</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="footer__copyright">
                <p>&copy; 2022 Copyright - Germ&aacute;n Figueroa</p>
            </div>
        </footer>
    );
}

export default Footer;