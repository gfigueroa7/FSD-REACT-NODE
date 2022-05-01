import { useEffect, useState } from 'react';
import Loader from 'react-spinners/ScaleLoader';

const BusinessForm = ({business}) => {
    const [formTitle, setFormTitle] = useState();
    const [formText, setFormText] = useState();
    const [formMsg, setFormMsg] = useState("");
    const [formClassValidation, setFormClassValidation] = useState("");
    const [starLoading, setStarLoading] = useState(false);
    const [color, setColor] = useState("rgb(235, 51, 73)");

    useEffect(()=>{
        setFormTitle(business.title);
        setFormText(business.text);
    },[business]);

    const handleSubmit = (e) => {
        e.preventDefault();

        let token = sessionStorage.getItem('token');

        if(formTitle === '' || formText === '') {
            setFormMsg(`Campos obligatorios sin completar, revise las pautas y vuelva a intentar.`);
            setFormClassValidation("msg__error");
            return
        }

        const putData  = {
            id: business.id,
            title: formTitle,
            text: formText
        };

        fetch(`http://localhost:4000/business`,
        {
            method:'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'auth-token': token
            },
            body: JSON.stringify(putData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 220 || data.status === 550) {
                setFormMsg(data.message);
                setFormClassValidation("msg__error");
                return;
            }

            setFormMsg(data.message);
            setFormClassValidation("msg__ok");
        })
        .catch(e => {
            setFormMsg(e);
            setFormClassValidation("msg__error");
        })
        .finally(()=>{
            setStarLoading(false);
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="section-form">
                <img className='img' src={business.img} alt="Logo" />
                <input type="text" className="form__input" placeholder="Title*" value={formTitle || ""} onChange={(e) => setFormTitle(e.target.value)} required />
                <textarea value={formText || ""} onChange={(e) => setFormText(e.target.value)} />
                <button className={"btn__button"}>Actualizar &rarr;</button>
            </form>

            {
                formMsg !== "" ? <p className={'form__msg '+formClassValidation} dangerouslySetInnerHTML={{__html: formMsg}} /> : '' 
            }

            <span className='loading'>
                <Loader color={color} loading={starLoading} />
            </span>
        </>
    );
}

export default BusinessForm;