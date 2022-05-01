import { useEffect, useState } from 'react';
import Spinner from 'react-spinners/BeatLoader';

import './../../assets/list.css';

import Header from '../general/Header';
import WholeList from '../shared/WholeList';

function Veterinary() {
    const [veterinaryList, setVeterinaryList] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [spinner, setSpinner] = useState(true);
    const [color, setColor] = useState("rgb(235, 51, 73)");

    useEffect(() => {
        fetch("http://localhost:4000/veterinary")
          .then((data) => data.json())
          .then(data => {
            setVeterinaryList(data);
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
            <Header mainName="Veterinarias" subName="" btnName="" />
            <section className="section-content">
                <div className='spinner'><Spinner color={color} loading={spinner} /></div>

                {
                  hasError && (<p className="hasError">Ocurrio un error, reintente nuevamente.</p>)
                }
                
                <WholeList arrayList={veterinaryList} pathname="/veterinarias" url="veterinary" color={color} />               
            </section>
        </>
    );
}

export default Veterinary;