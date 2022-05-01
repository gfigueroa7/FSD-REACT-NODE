import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Spinner from 'react-spinners/BeatLoader';
import WholeDetail from '../../shared/WholeDetail';

import Header from "./../../general/Header";

function StoresDetail() {
    const [storeObject, setStoreObject] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [spinner, setSpinner] = useState(true);
    const [color, setColor] = useState("rgb(235, 51, 73)");

    let location = useLocation();
    let params = location.state;

    useEffect(() => {
        fetch(`http://localhost:4000/${params.url}/detail/${params.id}`)
          .then((data) => data.json())
          .then(data => {
            setStoreObject(data);
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
            <Header mainName="Tienda" subName={storeObject.length === 0 ? '' : storeObject[0].Store.title} btnName="" />
            <section className="section-content">
                <div className='spinner'><Spinner color={color} loading={spinner} /></div>

                {
                  hasError && (<p className="hasError">Ocurrio un error, reintente nuevamente.</p>)
                }
  
                { storeObject.length === 0 ? '' :
                  <WholeDetail object={storeObject} url={params.url} pathname={location.pathname} />    
                }
                
            </section>
        </>
    );
}

export default StoresDetail;