import './../../assets/apply.css';

import Header from "../general/Header";
import AboutUs from '../shared/AboutUs';
import RegisterForm from '../forms/RegisterForm';

function Apply() {
    return (
        <>
            <Header mainName="Postularse" subName="" btnName="" />

            <AboutUs 
            title="Pautas" 
            paragraphA="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quam nemo ex fugiat natus ad explicabo necessitatibus consequatur. Omnis ex, eum nobis consequatur at quasi quaerat ipsa libero voluptates laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quam nemo ex fugiat natus ad explicabo necessitatibus consequatur. Omnis ex, eum nobis consequatur at quasi quaerat ipsa libero voluptates laudantium." 
            paragraphB="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quam nemo ex fugiat natus ad explicabo necessitatibus consequatur. Omnis ex, eum nobis consequatur at quasi quaerat ipsa libero voluptates laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quam nemo ex fugiat natus ad explicabo necessitatibus consequatur. Omnis ex, eum nobis consequatur at quasi quaerat ipsa libero voluptates laudantium." 
            subtitleA="" 
            subtitleB="" 
            class="about__sponsor"/>

            <section className="section__form">
                <h2 className="h2__heading">Formulario</h2>
                <div className="contacto__card">
                    <RegisterForm page="apply" />
                </div>
            </section>
        </>
    );
}

export default Apply;