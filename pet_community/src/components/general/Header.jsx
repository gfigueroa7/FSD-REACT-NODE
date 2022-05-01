import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = ({mainName,subName,btnName}) => {
    let token = sessionStorage.getItem('token');
    let rol = sessionStorage.getItem('rol');
    let business = sessionStorage.getItem('business');
    let name = sessionStorage.getItem('name');

    const [dropdownClass, setDropdownClass] = useState(false);
    const [iClass, setIClass] = useState("down");

    const scrollToDown = () => {
        window.scrollTo({
          top: 750,
          behavior: 'smooth'
        });
    };

    const logout = () => {
        sessionStorage.clear();
        window.location.href = '/comunidad';
    };

    const dropdown = () => {
        var modes = document.getElementById("dropdown-menu");
        if(dropdownClass) {
            setDropdownClass(false);
            setIClass("down");
            modes.classList.add("dropdown-menu--ocultar");
        } else {
            setDropdownClass(true);
            setIClass("up");
            modes.classList.remove("dropdown-menu--ocultar");
        }
    };

    return (
        <header className="header">
            <div className="header__logo-box">
                <Link to="/"><img src={require('./../../assets/img/logo-white-pet.png')} alt="Logo del sitio" /></Link>
            </div>
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">{mainName}</span>
                    {
                        subName !== "" ? <span className="heading-primary--sub">{subName}</span> : ""
                    }
                </h1>
                
                {
                    btnName !== "" ? <button className="btn__button" onClick={scrollToDown}>{btnName}</button> : ""
                }                  
            </div>

            {
                token ? 
                <nav className="footer__nav header__second" id="nav">
                    <ul className="footer__list">
                        <li><Link to="/comunidad">INICIO</Link></li>
                        <li><Link to="/blog">BLOG</Link></li>
                        <span>|</span>
                        <li className='user-menu'><a onClick={dropdown}>{name.toUpperCase()} <i className={`fas fa-caret-`+iClass}></i></a>
                            <ul id="dropdown-menu" className="dropdown-menu--ocultar">
                                { business > 0 ? <li><Link to="/business">NEGOCIO</Link></li> : ''}
                                { rol == 1 ? <li><Link to="/backend">BACKEND</Link></li> : ''}
                                <hr/>
                                <li><a href="#" onClick={logout}>SALIR</a></li>
                            </ul>
                        </li>
                    </ul>
                    <p></p>
                </nav> : ''
            }
            
            {
                subName !== "" && btnName !== "" ?
                <div className="header__animation">
                <i className="fas fa-paw"></i>
                <i className="fas fa-paw"></i>
                <i className="fas fa-paw"></i>
                <i className="fas fa-paw"></i>
                <i className="fas fa-paw"></i>
                </div> : ''
            }
        </header>
    );
}

export default Header;