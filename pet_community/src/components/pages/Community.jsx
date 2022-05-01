import './../../assets/community.css';

import Header from "../general/Header";
import AboutUs from '../shared/AboutUs';
import NewsCard from '../cards/NewsCard';
import LogoBox from '../shared/LogoBox';

function Community() {
    let token = sessionStorage.getItem('token');
    if(!token) {
        window.location.href = '/login';
    }

    return (
        <>
            <Header mainName="" subName="" btnName="" />

            <AboutUs 
            title=""
            paragraphA="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quam nemo ex fugiat natus ad explicabo necessitatibus consequatur. Omnis ex, eum nobis consequatur at quasi quaerat ipsa libero voluptates laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quam nemo ex fugiat natus ad explicabo necessitatibus consequatur. Omnis ex, eum nobis consequatur at quasi quaerat ipsa libero voluptates laudantium." 
            paragraphB="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quam nemo ex fugiat natus ad explicabo necessitatibus consequatur. Omnis ex, eum nobis consequatur at quasi quaerat ipsa libero voluptates laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quam nemo ex fugiat natus ad explicabo necessitatibus consequatur. Omnis ex, eum nobis consequatur at quasi quaerat ipsa libero voluptates laudantium." 
            subtitleA="title A" 
            subtitleB="title B" 
            class=""/>

            <section className="section-news news__community">
                <h2 className="h2__heading">News</h2>
                <NewsCard />
            </section>

            <section className="section-logos logos__sponsor">
                <LogoBox number={1} span={2} title="Gold Sponsor" type="gold" />
            </section>
            
        </>
    );
}

export default Community;