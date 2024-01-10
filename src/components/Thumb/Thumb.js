import './Thumb.scss';
function Thumb(props){

return (
        <div className='thumb'>
                <img src={props.logement.cover} alt={props.logement.title} />
                <h2>{props.logement.title}</h2>
        </div>
)

}

export default Thumb;