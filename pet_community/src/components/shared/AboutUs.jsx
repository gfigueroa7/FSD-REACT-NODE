const AboutUs = (props) => {
    return (
        <section className={"section-about "+props.class}>
            <h2 className="h2__heading">
                {props.title}
            </h2>
            <div className="about__text">
                { props.subtitleA !== '' ? <h3>{props.subtitleA}</h3> : ''}
                <p className="paragraph">
                    {props.paragraphA}
                </p>
                { props.subtitleB !== '' ? <h3>{props.subtitleB}</h3> : ''}
                <p className="paragraph">
                    {props.paragraphB}
                </p>
            </div>

            {
                props.subtitleA !== '' && props.subtitleB !== '' ?
                <div className="about__photo">
                    <img src={require('./../../assets/img/adorable-brown-1.jpg')} alt="Perro marrón y blanco levantado la pata izquierda" className="about__photo--p1" />
                    <img src={require('./../../assets/img/adorable-brown-2.jpg')} alt="Perro marrón y blanco sacando la lengua" className="about__photo--p2" />
                    <img src={require('./../../assets/img/adorable-brown-3.jpg')} alt="Perro marrón y blanco levantado la pata derecha" className="about__photo--p3" />
                </div>
                : ''
            }
            
        </section>
    );
}

export default AboutUs;