import '../App.scss';
import data from '../logements.json';
import Tag from "../components/Tag/Tag";
import Dropdown from '../components/Dropdown/Dropdown';
import Star from '../components/Star/Star';
import Error404 from './Error404';
import { useParams } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Carousel from '../components/Carousel/Carousel';


function Page() {

    const params = useParams();
    const logement = data.find((element) => element.id === params.idlogement);

    // Si le lien n'est pas le bon alors on affiche la page 404
    if (logement === undefined)
        return (
            <Routes>
                <Route path='/*' element={<Error404 />} />
            </Routes>
        );

    // Boucle pour afficher les étoiles de notation 
    const stars = [];
    for (let i = 1; i <= 5; i = i + 1) {
        if (i <= logement.rating) {
            stars.push(<Star rating />);
        } else {
            stars.push(<Star />);
        }
    }
    // Const pour ajouter plus de précision dans le Alt pour les photos des Hosts
    const altPhoto = "Photo du propriètaire " + (logement.host.name);

    return (

        <section className="content-page">
            <Carousel />
            <div className='location-ratings-content'>
                <div className='location-tags-content'>
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                    <div className='content-tags'> {logement.tags.map((tag) => <Tag nom={tag} />)} </div>
                </div>
                <div className='ratings-host'>
                    <div className='host-content'>
                        <p>{logement.host.name} </p>
                        <img src={logement.host.picture} alt={altPhoto} />
                    </div>
                    <div className='stars'>
                        {stars}
                    </div>
                </div>
            </div>
            <section className='dropdown-content'>
                <Dropdown title="Description" text={logement.description} />
                <Dropdown title='Équipement' text={logement.equipments} />

            </section>
        </section>

    );
}
export default Page;

//                <Dropdown title='Équipement' list={logement.equipments.map((listing) => <List li={listing} />)} />