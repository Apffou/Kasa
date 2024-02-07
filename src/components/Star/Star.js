import './Star.scss';
function Star(params) {

    //-------------------------------- variable avec structure ternaire pour afficher la classe par defaut ou non
    let classStar = "fa-solid fa-star" + (params.rating ? " star-active" : '');
    return (
        <>
            <i className={classStar} > </i >
        </>
    )
}

export default Star;