import { useState } from 'react';
import Loader from 'react-spinners/ScaleLoader';

function BlogForm() {
    const [formTitle, setFormTitle] = useState("");
    const [formContent, setFormContent] = useState("");
    const [formMsg, setFormMsg] = useState("");
    const [formClassValidation, setFormClassValidation] = useState("");
    const [starLoading, setStarLoading] = useState(false);
    const [color, setColor] = useState("rgb(235, 51, 73)");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let token = sessionStorage.getItem('token');

        if(formTitle !== '' && formContent !== '') {
            setFormMsg("");
            setStarLoading(true);

            const putData  = {
                title: formTitle,
                text: formContent,
            };

            fetch('http://localhost:4000/blog',
            {
                method:'POST',
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
                clearFormFields();
            })
            .catch(e => {
                setFormMsg(e);
                setFormClassValidation("msg__error");
            })
            .finally(() => {
                setStarLoading(false);
            })
        } else {
            setFormMsg(`Campos obligatorios sin completar, revise las pautas y vuelva a intentar.`);
            setFormClassValidation("msg__error");
        }

        const clearFormFields = () => {
            setFormTitle('');
            setFormContent('');
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="form">
                <input type="text" className="form__input" placeholder="Titulo*" value={formTitle} onChange={(e) => setFormTitle(e.target.value)} required />
                <textarea value={formContent} onChange={(e) => setFormContent(e.target.value)} />
                <button className={"btn__button"}>publicar &rarr;</button>
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

export default BlogForm;