import '../App.scss';
import data from '../logements.json';
import Tag from "../components/Tag/Tag";
import Dropdown from '../components/Dropdown/Dropdown';
import Star from '../components/Star/Star';
import { useParams } from "react-router-dom";


function Page() {

    const params = useParams();
    const logement = data.find((element) => element.id === params.idlogement);
    console.log(logement)
    console.log(logement.tags)
    return (

        <section className="content-page">
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
                <div>
                    <Star />
                </div>
            </div>
            <section className='dropdown-content'>
                <Dropdown title="Description" />
                <Dropdown title='Équipement' />
            </section>
        </section>

    );
}
export default Page;