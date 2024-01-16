import { Link } from 'react-router-dom';
import './Thumb.scss';
function Thumb(props) {

        return (
                <Link to={props.logement.id} >
                        <div className='thumb'>
                                <img src={props.logement.cover} alt={props.logement.title} />
                                <h2>{props.logement.title}</h2>
                        </div>
                </Link>
        )

}

export default Thumb;