import './../../assets/ranking.css';

import Header from '../general/Header';
import RankingTable from '../shared/RankingTable';

function Ranking() {
    return (
        <>
            <Header mainName="Ranking" subName="" btnName="" />
            <section className="section-content">
               <RankingTable />
            </section>
        </>
    );
}

export default Ranking;