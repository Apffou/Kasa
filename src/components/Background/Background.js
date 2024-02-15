import './Background.scss';
function Background(params) {
        // constante pour concatener le chemin ()évite de le retaper + création paramètre 
        const urlImg = "../../images/" + params.fileName;
        return (

                <div className='background'>
                        <h1> {params.h1}</h1>
                        <img src={urlImg} alt={""} />

                </div>
        )

}
export default Background;