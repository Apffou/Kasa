import { Routes, Route } from "react-router-dom";
import '../App.scss';
import Dropdown from '../components/Dropdown/Dropdown';
import Background from "../components/Background/Background";
//import data from './logements.json';

function About() {
    return (
        <>
            <Background fileName="paysage-montagne.png" />
            <Dropdown title="Fiabilité"></Dropdown>
            <Dropdown title="Respect"></Dropdown>
            <Dropdown title="Service"></Dropdown>
            <Dropdown title="Sécurité"></Dropdown>
        </>
    );
}

export default About;