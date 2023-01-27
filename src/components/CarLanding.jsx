import ImageGallery from 'react-image-gallery'
import car1 from '../assets/img/carousel1.jpg'
import car2 from '../assets/img/carousel2.jpg'
import "react-image-gallery/styles/css/image-gallery.css";
import '../assets/css/landing-nav.css'

export default function CarLanding(){
    
    const state = {
        autoPlay: true,
        showPlayButton: false,
        showFullscreenButton: false,
        showNav: false,
        slideInterval: 7000

    }
    const image = [
        {          
            original: car1,
        },
        {
            original: car2
        }
  
    ]

    return(
        <>
            <div className='carousel'>
                <ImageGallery 
                    items={image}
                    autoPlay={state.autoPlay}
                    showPlayButton={state.showPlayButton}
                    showFullscreenButton={state.showFullscreenButton} 
                    showNav={state.showNav}
                    slideInterval={state.slideInterval}
                />
            </div>
            
        </>
    )
}