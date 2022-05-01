import { useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-spinners/ScaleLoader';
import ReactStars from 'react-stars';

const WholeList = ({arrayList, pathname, url, color}) => {
    const [starLoading, setStarLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [hasMessage, setHasMessage] = useState(false);
    const [selected, setSelected] = useState();
    const [orderBy, setOrderBy] = useState();

    const ratingChanged = (id, index, people, total, value) => {
        hideStars(id);
        setSelected(id);
        setStarLoading(true);
        setHasMessage(false);

        const p = people + 1;
        const sum = (Number(total) + value) / p;
        const r = Math.round(sum * 100) / 100;
        const t = Number(total) + value;

        const putData  = {
            title: arrayList[index].title,
            rating: r,
            people: p,
            total: t
        };

        fetch(`http://localhost:4000/${url}/${id}`,
        {
            method:'PUT',
            headers: {
                'Content-Type': 'application/json',
                "x-access-token": "token-value",
            },
            body: JSON.stringify(putData)
        })
        .then(response => {
            if(response.ok) {
            setHasMessage(true);
            }
        })
        .catch(e => {
            setHasError(true);
        })
        .finally(()=>{
            setStarLoading(false);
        })
    }

    const hideStars = (id) => document.querySelector(".map__"+id+" div").style.display = "none";

    if(orderBy === 'ascendente') {
        arrayList.sort(
            function(a, b){
                if(a.title > b.title){
                    return 1;
                } 
                if(a.title < b.title){
                    return -1;
                } 
                if(a.title === b.title){
                    return 0;
                }
                return 0;
            }
        );
    }

    if(orderBy === 'descendente') {
        arrayList.sort(
            function(a, b){
                if(b.title > a.title){
                    return 1;
                } 
                if(b.title < a.title){
                    return -1;
                } 
                if(b.title === a.title){
                    return 0;
                } 
                return 0;
            }
        );
    }

    if(orderBy === 'mayor_rating') {
        arrayList.sort((a, b) => b.rating - a.rating);
    }

    if(orderBy === 'menor_rating') {
        arrayList.sort((a, b) => a.rating - b.rating);
    }

    if(orderBy === 'sponsor') {
        arrayList.sort((a, b) => a.crown_order - b.crown_order);
    }

    const contentImg = (value) => {
        return <>
            <div className="img__fondo"></div>
            <img src={value.img} alt="Logo" />
            {value.crown !== null ? <i className={`fas fa-crown `+value.crown}></i> : ''}
        </>
    }

    const contentHeading = (value) => {
        return <>
            <h2 className="h2__heading">
                {value.title}
            </h2>
            <p>{value.text.length > 250 ? value.text.substr(0,250).replace(/(<([^>]+)>)/gi, "") + "..." : value.text.replace(/(<([^>]+)>)/gi, "")}</p>
        </>
    }

    return (
        <>
            <div className="filters">
                <select defaultValue="" value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
                    <option value="" disabled>Ordenar por...</option>
                    <option value="ascendente">ascendente</option>
                    <option value="descendente">descendente</option>
                    <option value="mayor_rating">mayor rating</option>
                    <option value="menor_rating">menor rating</option>
                    <option value="sponsor">sponsors</option>
                </select>
            </div>     

            {
                arrayList.map((value, index) => {
                    return (
                        <div key={value.id} className="content__box content__box--1">
                            <div className="content__img">

                                {
                                    value.crown === 'gold' ?
                                    <Link to={`${pathname}/${value.id}`} state={{ url:url, id:value.id }} >{contentImg(value)}</Link> : contentImg(value)
                                }

                            </div>

                            {
                                value.crown === 'gold' ?
                                <div className="content__card">
                                    <Link to={`${pathname}/${value.id}`} state={{ url:url, id:value.id }} >{contentHeading(value)}</Link>
                                </div> :
                                <div className="content__card">
                                    {contentHeading(value)}
                                </div>
                            }
                            
                            <div className={"content__map map__"+value.id}>
                                <span className='loading'>
                                    {selected === value.id ? <Loader color={color} loading={starLoading} /> : ''}
                                </span>
                                {hasError && selected === value.id ? <p className="hasError">Ocurrio un error, reintente nuevamente.</p> : ''}
                                {hasMessage && selected === value.id ? <p className="hasmsg">Votaci&oacute;n realizada</p> : ''}
                                <span className="rating">{(Math.round(value.rating * 100) / 100).toFixed(2)}</span><ReactStars count={5} onChange={(e) => ratingChanged(value.id, index, value.people, value.total, e)} value={value.rating} size={24} color2={'#ffd700'} />
                                <span className="reviews">basado en {value.people} reseñas</span>
                            </div>
                        </div> 
                    )
                    
                })
            }

        </>
    );
}

export default WholeList;