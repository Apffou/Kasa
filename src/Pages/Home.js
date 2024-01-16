import { Routes, Route } from "react-router-dom";
import Background from '../components/Background/Background';
import Thumb from '../components/Thumb/Thumb';
import data from '../logements.json';
import Tag from '../components/Tag/Tag';
import Dropdown from '../components/Dropdown/Dropdown';
//import data from '../logements.json';

function Home() {
    return (

        <div>
            <Background fileName="paysage-cotier.png" alt='Paysage au bord de mer avec des falaises' h1="Chez vous, partout et ailleurs"></Background>
            <section className='cartes'>
                {data.map((logement) => <Thumb logement={logement} />)}
            </section>
        </div>
    );
}

export default Home;
