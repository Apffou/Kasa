import '../App.scss';
import data from '../logements.json';
import Tag from "../components/Tag/Tag";
import Dropdown from '../components/Dropdown/Dropdown';
import Star from '../components/Star/Star';
import { useParams } from "react-router-dom";


function Page() {

    const params = useParams();
    const logement = data.find((element) => element.id === params.idlogement);
    const stars = [];
    for (let i = 1; i <= 5; i = i + 1) {
        if (i <= logement.rating) {
            stars.push(<Star rating />);
        } else {
            stars.push(<Star />);
        }
    }

    return (

        <section className="content-page">
            <div className='carousel'>

            </div>
            <div className='location-ratings-content'>
                <div className='location-tags-content'>
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                    <div className='content-tags'> {logement.tags.map((tag) => <Tag nom={tag} />)} </div>
                </div>
                <div className='ratings-host'>
                    <div className='host-content'>
                        <p>{logement.host.name} </p>
                        <img src={logement.host.picture} />
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