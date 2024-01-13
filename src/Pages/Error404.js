import { Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

function Error404() {
    return (
        <div>
            <img />
            <h1> Oups! La page que vous demandez n'existe pas.</h1>
            <Link to="/" >Retourner sur la page d'accueil</Link>
        </div>
    );
}

export default Error404;