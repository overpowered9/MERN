import React from 'react';
import 'animate.css/animate.min.css';
import dpi from '../../assets/image.png'
const AnimatedImage = () => {
    return (
        <div className="sm:w-[50%] left-[10vw] relative">
            <img src={dpi} className="animate__animated animate__fadeInUp animate__slow sm:w-[300px] "/>
        </div>
    );
};

export default AnimatedImage;