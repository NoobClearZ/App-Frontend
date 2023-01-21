import ImageGallery from 'react-image-gallery'
import car1 from '../assets/img/carousel1.jpg'
import car2 from '../assets/img/carousel2.jpg'
import "react-image-gallery/styles/css/image-gallery.css";

export default function CarLanding(){
    
    const state = {
        autoPlay: true,
        showPlayButton: false,
        showFullscreenButton: false,
        showNav: false
    }
    const image = [
        {          original: car1
        },
        {
            original: car2
        }
  
    ]

    return(
        <>
            <ImageGallery 
                items={image}
                autoPlay={state.autoPlay}
                showPlayButton={state.showPlayButton}
                showFullscreenButton={state.showFullscreenButton} 
                showNav={state.showNav}
            />
        </>
    )
}