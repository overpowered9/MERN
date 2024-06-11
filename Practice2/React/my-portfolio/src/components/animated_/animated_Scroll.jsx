import React, { useState, useRef } from 'react';
import 'animate.css/animate.min.css';
import Card from '../cards/card';
import adapt from '../../assets/adapt.png';
import solution from '../../assets/solution.png';
import equal from '../../assets/equal.png';

const cards = [
    { imageSrc: adapt, text: 'Adaptability' },
    { imageSrc: solution, text: 'Problem solving' },
    { imageSrc: equal, text: 'Attention to detail' },
];

const AnimatedAttrSC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);

    const handleScroll = (direction) => {
        let newIndex = (currentIndex + direction) % cards.length;
        if (newIndex < 0) newIndex += cards.length; // Handle negative index
        setCurrentIndex(newIndex);
        containerRef.current.scrollTo({
            left: containerRef.current.clientWidth * newIndex,
            behavior: 'smooth',
        });
    };

    return (
        <div className="relative overflow-hidden px-[100px] py-7 animate__animated animate__fadeInUp animate__slow">
            <div className="flex overflow-x-hidden" ref={containerRef} style={{ scrollSnapType: 'x mandatory' }}>
                {cards.map((card, index) => (
                    <div key={index} className="flex-shrink-0 w-full flex justify-center" style={{ scrollSnapAlign: 'start' }}>
                        <Card imageSrc={card.imageSrc} text={card.text} />
                    </div>
                ))}
            </div>
            <button 
                className="absolute left-7 top-1/2 transform -translate-y-1/2" 
                onClick={() => handleScroll(-1)}
            >
                <p className='md: text-4xl'>{'<'}</p>
            </button>
            <button 
                className="absolute right-7 top-1/2 transform -translate-y-1/2" 
                onClick={() => handleScroll(1)} 
            >
            <p className='md: text-4xl'>{'>'}</p>
            </button>
        </div>
    );
};

export default AnimatedAttrSC;
