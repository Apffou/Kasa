import '../App.scss';
import data from '../logements.json';
import Tag from "../components/Tag/Tag";
import Dropdown from '../components/Dropdown/Dropdown';
import Star from '../components/Star/Star';
import Error404 from './Error404';
import { useParams } from "react-router-dom";
import Carousel from '../components/Carousel/Carousel';


function Page() {

    const params = useParams();
    const logement = data.find((element) => element.id === params.idlogement);

    // Si le lien n'est pas le bon alors on affiche la page 404
    if (logement === undefined)
        return (
            <Error404 />
        );

    // Boucle pour définir 5 étoiles, afficher les étoiles de notation 
    const stars = [];
    for (let i = 1; i <= 5; i = i + 1) {
        if (i <= logement.rating) {
            stars.push(<Star key={i} rating />);
        } else {
            stars.push(<Star key={i} />);
        }
    }

    return (

        <section className="content-page">
            < Carousel images={logement.pictures} />
            <div className='location-ratings-content'>
                <div className='location-tags-content'>
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                    <div className='content-tags'> {logement.tags.map((tag) => <Tag key={tag} nom={tag} />)} </div>
                </div>
                <div className='ratings-host'>
                    <div className='host-content'>
                        <p>{logement.host.name} </p>
                        <img src={logement.host.picture} alt={`Photo du propriètaire ${logement.host.name}`} />
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
