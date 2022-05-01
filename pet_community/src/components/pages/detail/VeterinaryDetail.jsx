import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Spinner from 'react-spinners/BeatLoader';
import WholeDetail from '../../shared/WholeDetail';

import './../../../assets/detail.css';

import Header from './../../general/Header';

function VeterinaryDetail() {
    const [veterinaryObject, setVeterinaryObject] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [spinner, setSpinner] = useState(true);
    const [color, setColor] = useState("rgb(235, 51, 73)");

    let location = useLocation();
    let params = location.state;

    useEffect(() => {
        fetch(`http://localhost:4000/${params.url}/detail/${params.id}`)
          .then((data) => data.json())
          .then(data => {
            setVeterinaryObject(data);
          })
          .catch(e => {
            setHasError(true);
          })
          .finally(()=>{
            setSpinner(false);
          })
    },[])

    return (
        <>
            <Header mainName="Veterinaria" subName={veterinaryObject.length === 0 ? '' : veterinaryObject[0].Veterinary.title} btnName="" />
            <section className="section-content">
                <div className='spinner'><Spinner color={color} loading={spinner} /></div>

                {
                  hasError && (<p className="hasError">Ocurrio un error, reintente nuevamente.</p>)
                }
                
                { veterinaryObject.length === 0 ? '' :
                  <WholeDetail object={veterinaryObject} url={params.url} pathname={location.pathname} />    
                }
                
            </section>
        </>
    );
}

export default VeterinaryDetail;