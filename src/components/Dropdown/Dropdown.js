import React, { useState } from 'react';
import './Dropdown.scss';


function Dropdown({ title, text }) {
        //--------------------------------  Utilisation de useState pour gérer l'état (par défaut à faux)
        const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false);

        const [classActive, setClassActive] = useState("");
        //-------------------------------- Constante pour ajouter 
        const toggleEquipments = () => {
                //-------------------------------- par défaut le dropdown est open
                setClassActive("open");
                if (isEquipmentsOpen) {
                        setClassActive("");
                }
                //--------------------------------Inversement du boolean de l'ouverture du dropdown
                setIsEquipmentsOpen(!isEquipmentsOpen);
        };

        let content = "";
        //
        switch (typeof text) {
                //-------------------------------- Dans le cas d'un objet on affiche la liste du tableau
                case 'object':
                        content = (
                                <ul>
                                        {text.map((item, index) => (
                                                <li key={index}>{item}</li>
                                        ))}
                                </ul>
                        );
                        break;
                //--------------------------------Par défault on affichera les textes
                default:
                        content = (<p>{text}</p>);
                        break
        }


        return (
                <div className={`dropdownSection ${classActive}`}>
                        <button className="dropdownSection__button">
                                {title}
                                <i className="fa-solid fa-angle-up dropdownSection__icon" onClick={() => toggleEquipments()} />
                        </button>

                        <div className="dropdownSection__content">
                                {content}
                        </div>
                </div>
        );
}
export default Dropdown;