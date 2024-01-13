import './Background.scss';
function Background(params) {
        const urlImg = "../../images/" + params.fileName;
        return (

                <div className='background'>
                        <img src={urlImg} />
                        <h1> {params.h1}</h1>
                </div>
        )

}

export default Background;