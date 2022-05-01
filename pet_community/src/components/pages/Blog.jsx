import { useEffect, useState } from 'react';
import Spinner from 'react-spinners/BeatLoader';

import './../../assets/blog.css';

import Header from "../general/Header";
import BlogForm from "../forms/BlogForm";

function Blog() {
    let token = sessionStorage.getItem('token');
    if(!token) {
        window.location.href = '/login';
    }

    const [blogList, setBlogList] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [spinner, setSpinner] = useState(true);
    const [color, setColor] = useState("rgb(235, 51, 73)");
    
    useEffect(()=>{
        fetch("http://localhost:4000/blog")
        .then((data) => data.json())
        .then(data => {
            setBlogList(data);
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

            <section className="section-blog blog__blog">
                <h2 className="h2__heading">Blog</h2>
                <div className='spinner'><Spinner color={color} loading={spinner} /></div>

                {
                    hasError && (<p className="hasError">Ocurrio un error, reintente nuevamente.</p>)
                }

                {
                    blogList.map((value, index) => {
                        return (
                            <div key={index} className={"post post__"+index}>
                                <div><h3>{value.title}</h3> <p><span className='author'>{value.Auth.name}</span> {new Date(value.date).toISOString().slice(0, 10)}</p></div>
                                <p>{value.text}</p>
                            </div>
                        )
                    })
                }
            </section>

            <section className="section-form form__blog">
                <h2 className="h2__heading">Publicar</h2>
                <BlogForm />
            </section>
            
        </>
    );
}

export default Blog;