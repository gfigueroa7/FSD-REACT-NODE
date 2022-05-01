import { useState } from 'react';
import Loader from 'react-spinners/ScaleLoader';

function LoginForm() {
    const [formEmail, setFormEmail] = useState("");
    const [formPassword, setFormPassword] = useState("");
    const [formMsg, setFormMsg] = useState("");
    const [formClassValidation, setFormClassValidation] = useState("");
    const [starLoading, setStarLoading] = useState(false);
    const [color, setColor] = useState("rgb(235, 51, 73)");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(formEmail !== '' && formPassword !== '') {
            setFormMsg("");
            setStarLoading(true);

            const putData  = {
                mail: formEmail,
                password: formPassword,
            };

            fetch('http://localhost:4000/auth/login',
            {
                method:'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
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
                sessionStorage.setItem('token', data.token);
                sessionStorage.setItem('name', data.name);
                sessionStorage.setItem('rol', data.rol);
                sessionStorage.setItem('business', data.business);
                clearFormFields();
                window.location.href = '/comunidad';
                
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
            setFormEmail('');
            setFormPassword('');
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="form">
                <input type="email" className="form__input" placeholder="Email*" value={formEmail} onChange={(e) => setFormEmail(e.target.value)} required />
                <input type="password" className="form__input" placeholder="Password*" value={formPassword} onChange={(e) => setFormPassword(e.target.value)} />
                <button className={"btn__button"}>acceder &rarr;</button>
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

export default LoginForm;