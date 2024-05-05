import React, { useState } from 'react';

const Carousel = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    };

    const prevImage = () => {
        setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
    };

    return (
        <div className="relative">
            <img src={images[currentImage]} alt="Carousel Image" className="w-full h-auto" />

            <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full"
                onClick={prevImage}
            >
                Previous
            </button>

            <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full"
                onClick={nextImage}
            >
                Next
            </button>
        </div>
    );
};

export default Carousel;