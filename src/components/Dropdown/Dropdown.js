import React, { useState } from 'react';
import './Dropdown.scss';


function Dropdown({ title, text, list }) {
        const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false);
        const [classActive, setClassActive] = useState("");

        const toggleEquipments = () => {
                if (!isEquipmentsOpen) {
                        setClassActive("open");
                } else {
                        setClassActive("");
                }
                setIsEquipmentsOpen(!isEquipmentsOpen);
        };


        let content = "";

        if (text) {
                content = text;
        }
        else if (list) {
                content = list.map((item, index) => (
                        <li key={index}>{item}</li>
                ));
        }

        return (
                <div className={`dropdownSection ${classActive}`}>
                        <button className="dropdownSection__button">
                                {title}
                                <i className="fa-solid fa-angle-up dropdownSection__icon"

                                        onClick={() => toggleEquipments()}
                                />
                        </button>

                        <div className="dropdownSection__content">
                                <p>
                                        {content}
                                </p>
                        </div>
                </div>
        );
}


/*function Dropdown(params) {

        return (
                <div className='dropdown'>
                        <span>{params.title}</span>
                        <i className="fa-solid fa-angle-up"></i>
                </div>

        )

        }*/

export default Dropdown;