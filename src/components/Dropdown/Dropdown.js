import React, { useState } from 'react';
import './Dropdown.scss';


function Dropdown({ title, text }) {
        //--------------------------------  Utilisation de useState pour gérer l'état (par défaut à faux)
        const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false);

        const [classActive, setClassActive] = useState("");
        //-------------------------------- Dans le cas d'un objet on affiche la liste du tableau
        const toggleEquipments = () => {
                if (!isEquipmentsOpen) {
                        setClassActive("open");
                } else {
                        setClassActive("");
                }
                setIsEquipmentsOpen(!isEquipmentsOpen);
        };

        let content = "";

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