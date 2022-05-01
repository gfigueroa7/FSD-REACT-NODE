import { useState } from 'react';
import Loader from 'react-spinners/ScaleLoader';

function RegisterForm({page}) {
    const [formName, setFormName] = useState("");
    const [formEmail, setFormEmail] = useState("");
    const [formPassword, setFormPassword] = useState("");
    const [formChecked, setFormChecked] = useState(false);
    const [formTipo, setFormTipo] = useState("");
    const [formTitle, setFormTitle] = useState("");
    const [formText, setFormText] = useState("");
    const [formMsg, setFormMsg] = useState("");
    const [formClassValidation, setFormClassValidation] = useState("");
    const [starLoading, setStarLoading] = useState(false);
    const [color, setColor] = useState("rgb(235, 51, 73)");
    
    const handleSubmit = (e) => {
        e.preventDefault();

        let trimmedTitle = formTitle.trim();
        let getPassword = formPassword;

        if(formChecked || page === 'apply'){
            if(formName !== '' && formEmail !== '' && formTipo !== '' && trimmedTitle !== '' && formText !== '') {
                setFormMsg("");
                setStarLoading(true);

                if(page === 'apply' && getPassword === '') {
                    getPassword = formName
                }

                if(page === 'login' && getPassword === '') {
                    setFormMsg(`Campos obligatorios sin completar, revise las pautas y vuelva a intentar.`);
                    setFormClassValidation("msg__error");
                    setStarLoading(false);
                    return
                }

                const putUser  = {
                    name: formName,
                    mail: formEmail,
                    password: getPassword,
                    type: formTipo
                };
    
                fetch('http://localhost:4000/auth/register',
                {
                    method:'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(putUser)
                })
                .then(response => response.json())
                .then(data => {
                    if (data.status === 220 || data.status === 550) {
                        setFormMsg(data.message);
                        setFormClassValidation("msg__error");
                        setStarLoading(false);
                        return
                    }

                    const putBusiness  = {
                        title: trimmedTitle.charAt(0).toUpperCase() + trimmedTitle.slice(1),
                        text: formText.charAt(0).toUpperCase() + formText.slice(1),
                        img: "assets/ejemplo.png",
                        user: data.userID
                    };

                    let url = '';
                    if(formTipo == 1){
                        url = 'veterinary';
                    } else if(formTipo == 2){
                        url = 'stores';
                    } else {
                        url = 'trainers';
                    }

                    fetch(`http://localhost:4000/${url}`,
                    {
                        method:'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(putBusiness)
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (data.status === 220 || data.status === 550) {
                            setFormMsg(data.message);
                            setFormClassValidation("msg__error");
                        } else {
                            setFormMsg(data.message);
                            setFormClassValidation("msg__ok");
                            clearFormFields();
                        }
                    })
                    .catch(e => {
                        setFormMsg(e);
                        setFormClassValidation("msg__error");
                    })
                    .finally(() => {
                        setStarLoading(false);
                    })
                })
                .catch(e => {
                    setFormMsg(e);
                    setFormClassValidation("msg__error");
                    setStarLoading(false);
                })
            } else {
                setFormMsg(`Campos obligatorios sin completar, revise las pautas y vuelva a intentar.`);
                setFormClassValidation("msg__error");
            }
        } else {
            if(formName !== '' && formEmail !== '' && formPassword !== '') {
                setFormMsg("");
                setStarLoading(true);
    
                const putData  = {
                    name: formName,
                    mail: formEmail,
                    password: formPassword,
                };
    
                fetch('http://localhost:4000/auth/register',
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
                    } else {
                        setFormMsg(data.message);
                        setFormClassValidation("msg__ok");
                        clearFormFields();
                    }
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
        }

        const clearFormFields = () => {
            setFormName('');
            setFormEmail('');
            setFormPassword('');
            setFormTipo('');
            setFormTitle('');
            setFormText('');
        }
    }

    const contentHeading = () => {
        return <>
            <select defaultValue="" value={formTipo} onChange={(e) => setFormTipo(e.target.value)}>
                <option value="" disabled>Tipo de negocio...</option>
                <option value="1">Veterinaria</option>
                <option value="2">Tienda</option>
                <option value="3">Entrenador</option>
            </select>
            <input type="text" className="form__input" placeholder="Nombre del negocio*" value={formTitle} onChange={(e) => setFormTitle(e.target.value)} />
            <input type="text" className="form__input" placeholder="Descripción*"  value={formText} onChange={(e) => setFormText(e.target.value)} />
        </>
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="form">
                <input type="text" className="form__input" placeholder="Nombre*" value={formName} onChange={(e) => setFormName(e.target.value)} required />
                <input type="email" className="form__input" placeholder="Email*" value={formEmail} onChange={(e) => setFormEmail(e.target.value)} required />

                {
                    page === 'login' ? <>
                    <input type="password" className="form__input" placeholder="Password*" value={formPassword} onChange={(e) => setFormPassword(e.target.value)} />
                    <label>Empresa:<input type="checkbox" className="form__input" checked={formChecked} onChange={(e) => setFormChecked(!formChecked)} /></label> </> : contentHeading()
                }
                
                {
                    formChecked ? contentHeading() : ''
                }

                <button className={"btn__button"}>{page === 'login' ? 'registrarte' : 'postularme'} &rarr;</button>
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

export default RegisterForm;