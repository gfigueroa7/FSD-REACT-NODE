import { Link } from 'react-router-dom';
import './../../assets/not_found.css';

function NotFound() {
    return (
        <section className="section-content">
            <div className="text">
                <h1>404</h1>
                <p>Miramos por todas partes, pero esa p&aacute;gina parece haberse escapado de nosotros. Pruebe acceder al men&uacute; o pinche la foto para volver a la normalidad.</p>
            </div>
            <div className="img">
                <Link to="/"><img src={require('./../../assets/img/illustration-dogs.png')} alt="Perros escapandose del dueño - 404" /></Link>  
            </div>
        </section>
    );
}

export default NotFound;