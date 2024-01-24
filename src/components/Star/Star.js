import './Star.scss';
function Star(params) {

    let classStar = "fa-solid fa-star" + (params.rating ? " star-active" : '');
    return (
        <>
            <i className={classStar} > </i >
        </>
    )
}

export default Star;