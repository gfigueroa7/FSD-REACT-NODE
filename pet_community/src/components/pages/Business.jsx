import { useEffect, useState } from 'react';
import Spinner from 'react-spinners/BeatLoader';

import './../../assets/business.css';

import Header from "../general/Header";
import BusinessFrom from "../forms/BusinessForm";

function Business() {
    let token = sessionStorage.getItem('token');
    if(!token) {
        window.location.href = '/login';
    }

    let business = sessionStorage.getItem('business');
    if(business == 'null') {
        window.location.href = '/comunidad';
    }

    const [businessList, setBusinessList] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [spinner, setSpinner] = useState(true);
    const [color, setColor] = useState("rgb(235, 51, 73)");

    useEffect(()=>{
        fetch('http://localhost:4000/business',{
            method:'GET',
            headers: {
                'auth-token': token
            },
        })
        .then((data) => data.json())
        .then(data => {
            setBusinessList(data);
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
            <Header mainName="" subName="" btnName="" />

            <section className="section-business business__business">
                <h2 className="h2__heading">Negocio</h2>
                <div className='spinner'><Spinner color={color} loading={spinner} /></div>

                {
                    hasError && (<p className="hasError">Ocurrio un error, reintente nuevamente.</p>)
                }

                <BusinessFrom business={businessList} />

            </section>
            
        </>
    );
}

export default Business;