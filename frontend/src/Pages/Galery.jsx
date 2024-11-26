import React, { useState } from 'react'
import { assets, gallery } from '../assets/assets';

const Galery = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(null); // Promenio false u null


    const openImage = (index) => {
        setCurrentImageIndex(index);
        console.log(index);
      };
    
      const closeImage = () => {
        setCurrentImageIndex(null);
      };
    
      const prevImage = () => {
        if (currentImageIndex > 0) {
          setCurrentImageIndex(currentImageIndex - 1);
        }
      };
    
      const nextImage = () => {
        if (currentImageIndex < gallery.length - 1) {
          setCurrentImageIndex(currentImageIndex + 1);
        }
      };
  return (
    <div id='galerija'>
        
        {openImage &&(
            <div className='absolute'>
                <img src={gallery.index} alt="" />
            </div>
        )}
      <div className='pt-40'>
        <div className='flex justify-center'>
        {gallery.length > 0 &&(
            <div className='pt-20 w-2/4'>
                <div className='grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-12'>
                {gallery.map((images, index)=>(
                    <div key={index} className='flex justify-center'>
                        <img src={images.image}
                         alt="" 
                         className='rounded-3xl '
                         onClick={() => openImage(index)}
                         />
                    </div>
                ))}
                </div>
            </div>
        )}
        </div>
        {currentImageIndex !== null && (
          <div
            className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50"
            onClick={closeImage}
          >
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              {currentImageIndex !== null && gallery[currentImageIndex] && ( // Dodao provere
                <div>
                  <img
                  src={gallery[currentImageIndex].image}
                  alt={`Screenshot ${currentImageIndex + 1}`}
                  className="max-w-full max-h-screen"
                />
                </div>
              )}
             
              <button
                className="absolute top-2 right-2 text-white text-2xl"
                onClick={closeImage}
              >
                &times;
              </button>

              {currentImageIndex > 0 && (
                <button
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-4xl"
                  onClick={prevImage}
                >
                  &#10094;
                </button>
              )}

              {currentImageIndex < gallery.length - 1 && (
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-4xl"
                  onClick={nextImage}
                >
                  &#10095;
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Galery
