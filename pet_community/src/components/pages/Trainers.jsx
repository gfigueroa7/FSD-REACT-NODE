import { useEffect, useState } from 'react';
import Spinner from 'react-spinners/BeatLoader';

import Header from '../general/Header';
import WholeList from '../shared/WholeList';

function Trainers() {
    const [trainerList, setTrainerList] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [spinner, setSpinner] = useState(true);
    const [color, setColor] = useState("rgb(235, 51, 73)");

    useEffect(() => {
        fetch("http://localhost:4000/trainers")
          .then((data) => data.json())
          .then(data => {
            setTrainerList(data);
            showFilters("grid");
          })
          .catch(e => {
            setHasError(true);
          })
          .finally(() => {
            setSpinner(false);
          })
    },[])

    const showFilters = (display) => document.querySelector(".section-content .filters").style.display = display;

    return (
        <>
            <Header mainName="Entrenadores" subName="" btnName="" />
            <section className="section-content">
                <div className='spinner'><Spinner color={color} loading={spinner} /></div>

                {
                  hasError && (<p className="hasError">Ocurrio un error, reintente nuevamente.</p>)
                }
                
                <WholeList arrayList={trainerList} pathname="/entrenadores" url="trainers" color={color} />               
            </section>
        </>
    );
}

export default Trainers;