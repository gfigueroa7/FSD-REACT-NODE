import { useEffect, useState } from 'react';
import Spinner from 'react-spinners/BeatLoader';
import { Link } from 'react-router-dom';

function NewsCard() {
    const [newsList, setNewsList] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [spinner, setSpinner] = useState(true);
    const [color, setColor] = useState("rgb(235, 51, 73)");

    useEffect(()=>{
        fetch("http://localhost:4000/news")
        .then((data) => data.json())
        .then(data => {
            setNewsList(data);
        })
        .catch(e => {
            setHasError(true);
        })
        .finally(() => {
            setSpinner(false);
        })
    },[]);

    return (
        <>
        <div className='spinner'><Spinner color={color} loading={spinner} /></div>
        {
            hasError && (<p className="hasError">Ocurrio un error, reintente nuevamente.</p>)
        }

        {
            newsList.map((value, index) => {
                return (
                    <div key={index} className={"news__card news__card_"+index}>
                        <Link to=''><img src={require('./../../assets/img/ejemplo.png')} alt="Ejemplo de logo" /></Link>
                        <p><span className="news__date">{new Date(value.date).toISOString().slice(0, 10)}</span><br/><span className="news__title">{value.title}</span><br/>{value.text}</p>
                    </div>
                )
            })
        }
        </>
    );
}

export default NewsCard;