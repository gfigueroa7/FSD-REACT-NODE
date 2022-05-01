import './../../assets/sponsor.css';

import Header from '../general/Header';
import AboutUs from '../shared/AboutUs';
import PartnerCard from '../cards/PartnerCard';
import LogoBox from '../shared/LogoBox';

function Sponsor() {
    return (
        <>
            <Header mainName="Sponsors" subName="" btnName="" />
            
            <AboutUs 
            title="Pautas" 
            paragraphA="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quam nemo ex fugiat natus ad explicabo necessitatibus consequatur. Omnis ex, eum nobis consequatur at quasi quaerat ipsa libero voluptates laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quam nemo ex fugiat natus ad explicabo necessitatibus consequatur. Omnis ex, eum nobis consequatur at quasi quaerat ipsa libero voluptates laudantium." 
            paragraphB="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quam nemo ex fugiat natus ad explicabo necessitatibus consequatur. Omnis ex, eum nobis consequatur at quasi quaerat ipsa libero voluptates laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quam nemo ex fugiat natus ad explicabo necessitatibus consequatur. Omnis ex, eum nobis consequatur at quasi quaerat ipsa libero voluptates laudantium." 
            subtitleA="" 
            subtitleB="" 
            class="about__sponsor"/>
            
            <section className="section-partners partners__sponsor">
                <h2 className="h2__heading">Se sponsor</h2>
                <PartnerCard number={1} title="Bronze Sponsor" type="bronze" price={5} />
                <PartnerCard number={2} title="Gold Sponsor" type="gold" price={30} />
                <PartnerCard number={3} title="Silver Sponsor" type="silver" price={15} />
            </section>

            <section className="section-logos logos__sponsor">
                <h2 className="h2__heading">Sponsors</h2>
                <LogoBox number={1} span={2} title="Gold Sponsor" type="gold" />
                <LogoBox number={2} span={3} title="Silver Sponsor" type="silver" />
                <LogoBox number={3} span={1} title="Bronze Sponsor" type="bronze" />
            </section>
       
        </>
    );
}

export default Sponsor;