import Menu from 'react-burger-menu/lib/menus/bubble';
import { Link } from 'react-router-dom';

const BurgerMenu = (props) => {
    let token = sessionStorage.getItem('token');
    
    return (
        <Menu {...props}>
            <Link to="/">Inicio</Link>
            <Link to="veterinarias">Veterinarias</Link>
            <Link to="tiendas">Tiendas</Link>
            <Link to="entrenadores">Entrenadores</Link>
            {
                token ? <Link to="comunidad">Comunidad</Link> : <Link to="login">Comunidad</Link>
            }
            <Link to="postularse">Postularse</Link>
            <Link to="sponsor">Sponsor</Link>
            <Link to="ranking">Ranking</Link>
            <p>&copy; 2022 Copyright <br/> Germ&aacute;n Figueroa</p>
        </Menu>
    );
}

export default BurgerMenu;