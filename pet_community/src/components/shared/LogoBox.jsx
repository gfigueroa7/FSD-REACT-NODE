import { Link } from 'react-router-dom';

const LogoBox = (props) => {
    return (
        <div className={"logos__box logos__box--"+props.number}>
            <h4 className="card__heading">
                <span className={"card__heading-span--"+props.span}>{props.title}</span>
            </h4>
            <div className="logos__card">

                {
                    props.type === 'gold' ?
                    <>
                    <Link to=''><img src={require('./../../assets/img/ejemplo.png')} alt="Ejemplo de logo" /></Link>
                    <Link to=''><img src={require('./../../assets/img/ejemplo.png')} alt="Ejemplo de logo" /></Link>
                    <Link to=''><img src={require('./../../assets/img/ejemplo.png')} alt="Ejemplo de logo" /></Link>
                    </> : ''
                }

                {
                    props.type === 'silver' ?
                    <>
                    <Link to=''><img src={require('./../../assets/img/ejemplo.png')} alt="Ejemplo de logo" /></Link>
                    <Link to=''><img src={require('./../../assets/img/ejemplo.png')} alt="Ejemplo de logo" /></Link>
                    <Link to=''><img src={require('./../../assets/img/ejemplo.png')} alt="Ejemplo de logo" /></Link>
                    <Link to=''><img src={require('./../../assets/img/ejemplo.png')} alt="Ejemplo de logo" /></Link>
                    <Link to=''><img src={require('./../../assets/img/ejemplo.png')} alt="Ejemplo de logo" /></Link>
                    <Link to=''><img src={require('./../../assets/img/ejemplo.png')} alt="Ejemplo de logo" /></Link>
                    </> : ''
                }
                
                {
                    props.type === 'bronze' ?
                    <>
                    <Link to=''><img src={require('./../../assets/img/ejemplo.png')} alt="Ejemplo de logo" /></Link>
                    <Link to=''><img src={require('./../../assets/img/ejemplo.png')} alt="Ejemplo de logo" /></Link>
                    <Link to=''><img src={require('./../../assets/img/ejemplo.png')} alt="Ejemplo de logo" /></Link>
                    <Link to=''><img src={require('./../../assets/img/ejemplo.png')} alt="Ejemplo de logo" /></Link>
                    <Link to=''><img src={require('./../../assets/img/ejemplo.png')} alt="Ejemplo de logo" /></Link>
                    <Link to=''><img src={require('./../../assets/img/ejemplo.png')} alt="Ejemplo de logo" /></Link>
                    <Link to=''><img src={require('./../../assets/img/ejemplo.png')} alt="Ejemplo de logo" /></Link>
                    <Link to=''><img src={require('./../../assets/img/ejemplo.png')} alt="Ejemplo de logo" /></Link>
                    <Link to=''><img src={require('./../../assets/img/ejemplo.png')} alt="Ejemplo de logo" /></Link>
                    </> : ''
                }
                
            </div>
        </div>
    );
}

export default LogoBox;