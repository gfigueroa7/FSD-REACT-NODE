import { useState } from 'react';
import Spinner from "react-spinners/BeatLoader";
import ReactStars from 'react-stars';

function RankingTable() {
    const [arrayList, setArrayList] = useState([]);
    const [selected, setSelected] = useState("");
    const [hasError, setHasError] = useState(false);
    const [spinner, setSpinner] = useState(false);
    const [color, setColor] = useState("rgb(235, 51, 73)");

    const getArray = (url) => {
        if(selected !== url) {
            setSpinner(true);
            setSelected(url);
            fetch(`http://localhost:4000/${url}`)
            .then((data) => data.json())
            .then(data => {
                data.sort((a, b) => b.total - a.total);
                setArrayList(data);
            })
            .catch(e => {
                setHasError(true);
            })
            .finally(()=>{
                setSpinner(false);
            })
        }
    }

    let total = 0;
    let customIndex = 0;
    let hasIndex = 0;

    return (
        <>
            <button className="btn__veterinary" onClick={(e) => getArray('veterinary')}>Veterinarias</button>
            <button className="btn__stores" onClick={(e) =>  getArray('stores')}>Tiendas</button>
            <button className="btn__trainers" onClick={(e) => getArray('trainers')}>Entrenadores</button>
            <div className="ranking__content">

                {
                    arrayList.length !== 0 ?
                    <div className="ranking__title">
                        <h3>#</h3>
                        <h3>Nombre</h3>
                        <h3>Puntos</h3>
                        <h3>Votos</h3>
                        <h3>Promedio</h3>
                        <h3 className="stars">Stars</h3>
                    </div> : 
                    <>
                        {
                            hasError === true ?
                            <p className="hasError">Ocurrio un error, reintente nuevamente.</p> :
                            <p className="ranking__msg">Eliga una entidad para ver su ranking.</p>
                        }
                        <div className="spinner"><Spinner color={color} loading={spinner} /></div>
                    </>
                }

                <div className="ranking__data">      

                    {
                        arrayList.map((value, index) => {
                            return (
                                <div key={index} className="ranking__data_info">
                                    <p>{total === value.total ? customIndex : customIndex++, total = value.total, customIndex === hasIndex ? ' ' : hasIndex = customIndex}</p>
                                    <p>{value.title}</p>
                                    <p>{value.total}</p>
                                    <p>{value.people}</p>
                                    <p>{value.rating}</p>
                                    <div className="stars"><ReactStars count={5} value={value.rating} edit={false} size={24} color2={'#ffd700'} /></div>
                                </div>
                            )
                        })
                    }

                    {
                        arrayList.length !== 0 ? <div className="spinner"><Spinner color={color} loading={spinner} /></div> : ''
                    }

                </div>
            </div>
        </>
    );
}

export default RankingTable;