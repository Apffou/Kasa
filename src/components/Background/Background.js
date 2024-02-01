import './Background.scss';
function Background(params) {
        const urlImg = "../../images/" + params.fileName;
        return (

                <div className='background'>
                        <h1> {params.h1}</h1>
                        <img src={urlImg} />

                </div>
        )

}

export default Background;