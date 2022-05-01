import { Link } from "react-router-dom";

const WholeDetail = ({object, url, pathname}) => {
    const father = pathname.split("/")[1];

    var object = object[0];

    return (
        <div className="content__detail">
            <h2 className="h2__heading">{url === 'stores' ? object.Store.title : url === 'trainers' ? object.Trainer.title : object.Veterinary.title}</h2>
            <Link to={`/${father}`}><button className="btn__button">← Volver</button></Link>
            <div className="detail__img"><img src={url === 'stores' ? `/${object.Store.img}` : url === 'trainers' ? `/${object.Trainer.img}` : `/${object.Veterinary.img}`} alt="Logo" /></div>
            <div className="detail__info">
                <div className="info__A">
                    <p className="info__title"><b>LOCALIDAD</b></p><p>{object.location}</p><br/>
                    <p className="info__title"><b>DIRECCIÓN</b></p><p>{object.address}</p><br/>
                    <p className="info__title"><b>E-MAIL</b></p><p><a href={`mailto:${object.email}`}>{object.email}</a></p><br/>
                    <p className="info__title"><b>TELÉFONO</b></p><p><a href={`tel:${object.phone}`}>{object.phone}</a></p>
                </div>
                <div className="info__B">

                    {
                        object.week !== '' && object.saturday !== '' && object.sunday !== '' ?
                        <><p><b>HORARIOS</b></p>
                        <p>{object.week}</p>
                        <p>{object.saturday}</p>
                        <p>Domingos {object.sunday}</p></> : ''
                    }
                
                </div>
            </div>
            <div className="detail__map">

                {
                    object.map_img !== '' ?
                    <><img src={object.map_img} alt="Ir" />
                    <a href={`${object.map_url}`} target="_blank" rel="noreferrer">VER</a></>
                    : ''
                }

            </div>
            {url === 'stores' ? <p dangerouslySetInnerHTML={{__html: '<b>DESCRIPCION</b><br>'+object.Store.text}} /> : url === 'trainers' ? <p dangerouslySetInnerHTML={{__html: '<b>DESCRIPCION</b><br>'+object.Trainer.text}} /> : <p dangerouslySetInnerHTML={{__html: '<b>DESCRIPCION</b><br>'+object.Veterinary.text}} />}
        </div>
    );
}

export default WholeDetail;