import { useState } from 'react';

const PartnerForm = ({title,price,number}) => {
    const [formName, setFormName] = useState("");
    const [formEmail, setFormEmail] = useState("");
    const [formCompany, setFormCompany] = useState("");
    const [formPartener, setFormPartener] = useState(title);
    const [formPrice, setFormPrice] = useState(price);
    const [formMsg, setFormMsg] = useState();
    const [formClassValidation, setFormClassValidation] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let trimmedName = formName.trim();
        if(!onlyLetters(trimmedName)) {
            setFormMsg(`El nombre no es valido.<br> No puede estar vacio. <br> No puede contener números.`);
            setFormClassValidation("msg__error");
        } else if(trimmedName !== '' && formEmail !== '') {
            setFormMsg(`Gracias <b>${trimmedName}</b> por estar interesado, nos pondremos en contacto.`);
            setFormClassValidation("msg__ok");
            clearFormFields();
        }
    }

    const onlyLetters = (name) => name.match(/^[a-zA-Z\s]+$/);

    const clearFormFields = () => {
        setFormName('');
        setFormEmail('');
        setFormCompany('');
    }

    const clearFormMsg = () => {
        setFormMsg('');
        setFormClassValidation('');
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="form">
                <div className="form__group">
                    <input type="text" className="form__input" placeholder="Nombre*" value={formName} onChange={(e) => setFormName(e.target.value)} id="name" required />
                    <label htmlFor="name" className="form__label">Nombre</label>
                </div>
                <div className="form__group">
                    <input type="email" className="form__input" placeholder="Email*" value={formEmail} onChange={(e) => setFormEmail(e.target.value)} id="email" required />
                    <label htmlFor="email" className="form__label">Email</label>
                </div>
                <div className="form__group">
                    <input type="text" className="form__input" placeholder="Company" value={formCompany} onChange={(e) => setFormCompany(e.target.value)} id="company" />
                    <label htmlFor="company" className="form__label">Company</label>
                </div>
                <div className="form__group">
                    <input type="text" className="form__input" placeholder="Partener" id="partener" value={formPartener} disabled />
                    <label htmlFor="partener" className="form__label">Partener</label>
                </div>
                <div className="form__group">
                    <input type="text" className="form__input" placeholder="Price" id="price" value={formPrice} disabled />
                    <label htmlFor="price" className="form__label">Price USD</label>
                </div>
                <div className="form__group">
                    <button onClick={clearFormMsg} className={"btn__button card__heading-span--" + number}>unirme &rarr;</button>
                </div>
            </form>

            {
                formMsg !== "" ? <p className={'form__msg '+formClassValidation} dangerouslySetInnerHTML={{__html: formMsg}} /> : '' 
            }
            
        </>
    );
}

export default PartnerForm;