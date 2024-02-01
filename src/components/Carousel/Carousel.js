import rightArrow from '../../assets/img/right-arrow.png';
import leftArrow from '../../assets/img/left-arrow.png';
import './Carousel.scss';
import { useState } from 'react';

function Carousel({ images }) {
    // Utilisation de useState pour gérer l'index de l'image actuellement affichée
    const [currentImageIndex, setCurrentImageIndex] = useState(0); //index, fonction à appeler pour modifier
    const totalImages = images.length;
    //--------------------------------
    const previousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? totalImages - 1 : prevIndex - 1
        );
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === totalImages - 1 ? 0 : prevIndex + 1
        );
    };

    if (totalImages === 1) {
        return (
            <div className="pictures-carrousel">
                <img src={images[0]} alt={images.title} />
            </div>
        );
    }

    return (
        <div className='carousel'>
            <img src={images[currentImageIndex]} alt={images.title} />
            <div className='inPage'>{currentImageIndex + 1}/ {totalImages}</div>
            <div className='arrows'>
                <img src={leftArrow} alt='précédent' onClick={previousImage} />
                <img src={rightArrow} alt='suivant' onClick={nextImage} />
            </div>
        </div>

    )

}

export default Carousel;
