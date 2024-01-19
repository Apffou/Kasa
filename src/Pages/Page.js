import '../App.scss';
import data from '../logements.json';
import Tag from "../components/Tag/Tag";
import Dropdown from '../components/Dropdown/Dropdown';
import { useParams } from "react-router-dom";


function Page() {

    const params = useParams();
    const logement = data.find((element) => element.id === params.idlogement);
    console.log(logement)
    console.log(logement.tags)
    return (

        <div className="content-page">
            <h1>{logement.title}</h1>
            <div className='content-tags'> {logement.tags.map((tag) => <Tag nom={tag} />)} </div>
            <Dropdown title="Description" />
            <Dropdown title='Équipement' />
        </div>

    );
}
export default Page;