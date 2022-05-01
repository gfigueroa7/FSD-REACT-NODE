function Contact() {
    return (
        <div className="contacto__card">
            <form className="form">
                <h2 className="h2__heading">
                    Contacto
                </h2>
                <div className="form__group">
                    <input type="text" className="form__input" placeholder="Nombre" id="name" required />
                    <label htmlFor="name" className="form__label">Nombre</label>
                </div>
                <div className="form__group">
                    <input type="email" className="form__input" placeholder="Email" id="email" required />
                    <label htmlFor="email" className="form__label">Email</label>
                </div>
                <div className="form__group">
                    <textarea className="form__input" placeholder="Mensaje" id="msg" rows="5" required></textarea>
                    <label htmlFor="msg" className="form__label">Mensaje</label>
                </div>
                <div className="form__group">
                    <button className="btn__button">Enviar &rarr;</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;