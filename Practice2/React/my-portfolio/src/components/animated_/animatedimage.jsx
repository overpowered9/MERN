import React from 'react';
import 'animate.css/animate.min.css';
import dpi from '../../assets/image.png'
const AnimatedImage = () => {
    return (
        <div className="w-[40%] aspect-auto left-0 sm:left-[10vw] relative sm:w-[50%]  overflow-hidden">
            <img alt='pic' src={dpi} className="animate__animated animate__fadeInUp animate__slow sm:w-[300px] "/>
        </div>
    );
};

export default AnimatedImage;