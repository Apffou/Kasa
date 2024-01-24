import React, { useState } from 'react';
import './Dropdown.scss';

function Dropdown(params) {

        return (
                <div className='dropdown'>
                        <span>{params.title}</span>
                        <i className="fa-solid fa-angle-up"></i>
                </div>

        )

}

export default Dropdown;