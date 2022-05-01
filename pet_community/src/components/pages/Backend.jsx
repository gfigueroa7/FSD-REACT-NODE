import { useEffect, useState } from 'react';
import Loader from 'react-spinners/ScaleLoader';

import './../../assets/backend.css';

import Header from "../general/Header";
import BackendBlogForm from "../forms/BackendBlogForm";
import BackendNewsForm from "../forms/BackendNewsForm";

function Backend() {
    let token = sessionStorage.getItem('token');
    if(!token) {
        window.location.href = '/login';
    }

    let rol = sessionStorage.getItem('rol');
    if(rol != 1) {
        window.location.href = '/comunidad';
    }

    const [backendList, setBackendList] = useState([]);
    const [formMsg, setFormMsg] = useState("");
    const [formClassValidation, setFormClassValidation] = useState("");
    const [starLoading, setStarLoading] = useState(false);
    const [color, setColor] = useState("rgb(235, 51, 73)");

    useEffect(()=>{
        fetch('http://localhost:4000/backend',{
            method:'GET',
            headers: {
                'auth-token': token
            },
        })
        .then((data) => data.json())
        .then(data => {
            setBackendList(data);
        })
        .catch(e => {
            setFormMsg(e);
            setFormClassValidation("msg__error");
        })
        .finally(() => {
            setStarLoading(false);
        })
    },[]);

    return (
        <>
            <Header mainName="" subName="" btnName="" />

            <section className="section-backend backend__backend">
                {
                    formMsg !== "" ? <p className={'form__msg '+formClassValidation} dangerouslySetInnerHTML={{__html: formMsg}} /> : '' 
                }

                <span className='loading'>
                    <Loader color={color} loading={starLoading} />
                </span>

                <h2 className="h2__heading">Backend - Blog</h2>
                <BackendBlogForm backendList={backendList} />

                <h2 className="h2__heading">Backend - News</h2>
                <BackendNewsForm backendList={backendList} />
            </section>
        </>
    );
}

export default Backend;