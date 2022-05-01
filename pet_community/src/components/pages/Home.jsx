import './../../assets/home.css';

import Header from '../general/Header';
import AboutUs from '../shared/AboutUs';
import FeatureCard from '../cards/FeatureCard';
import PartnerCard from '../cards/PartnerCard';
import HomeForm from '../forms/HomeForm';
import LogoBox from '../shared/LogoBox';

function Home() {
    return (
        <>
            <Header mainName="Pet Community" subName="comunidad de mascotas" btnName="Explorar" />

            <main>
                <AboutUs 
                title="Sobre nosotros" 
                paragraphA="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quam nemo ex fugiat natus ad explicabo necessitatibus consequatur. Omnis ex, eum nobis consequatur at quasi quaerat ipsa libero voluptates laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quam nemo ex fugiat natus ad explicabo necessitatibus consequatur. Omnis ex, eum nobis consequatur at quasi quaerat ipsa libero voluptates laudantium." 
                paragraphB="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quam nemo ex fugiat natus ad explicabo necessitatibus consequatur. Omnis ex, eum nobis consequatur at quasi quaerat ipsa libero voluptates laudantium." 
                subtitleA="Title 1" 
                subtitleB="Title 2" 
                class=""/>

                <section className="section-features">
                    <div className="features__box">
                        <FeatureCard number={1} icon="fa-users" title="Comunidad" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur." />
                        <FeatureCard number={2} icon="fa-user-md" title="Veterinarias" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur." />
                        <FeatureCard number={3} icon="fas fa-paw" title="Entrenadores" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur." />
                        <FeatureCard number={4} icon="fas fa-store" title="Stores" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur." />
                    </div>
                </section>
            </main>

            <section className="section-partners">
                <h2 className="h2__heading">Se sponsor</h2>
                <PartnerCard number={1} title="Bronze Sponsor" type="bronze" price={5} />
                <PartnerCard number={2} title="Gold Sponsor" type="gold" price={30} />
                <PartnerCard number={3} title="Silver Sponsor" type="silver" price={15} />
            </section>

            <section className="section-contacto">
                <HomeForm />
            </section>

            <section className="section-logos">
                <h2 className="h2__heading">Sponsors</h2>
                <LogoBox number={1} span={2} title="Gold Sponsor" type="gold" />
                <LogoBox number={2} span={3} title="Silver Sponsor" type="silver" />
                <LogoBox number={3} span={1} title="Bronze Sponsor" type="bronze" />
            </section>
        </>
    );
}

export default Home;
