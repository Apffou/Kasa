import './Star.scss';
function Star(params) {

    let classStar = "fa-solid fa-star fa-sm" + (params.rating ? " star-active" : '');
    return (
        <>
            <i className={classStar} > </i >
        </>
    )
}

export default Star;