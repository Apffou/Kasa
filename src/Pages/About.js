import '../App.scss';
import Dropdown from '../components/Dropdown/Dropdown';
import Background from "../components/Background/Background";
//import data from './logements.json';

function About() {
    return (
        <>
            <Background fileName="paysage-montagne.png" />
            <div className="about-content">
                <Dropdown title="Fiabilité"></Dropdown>
                <Dropdown title="Respect"></Dropdown>
                <Dropdown title="Service"></Dropdown>
                <Dropdown title="Sécurité"></Dropdown>
            </div>
        </>
    );
}

export default About;