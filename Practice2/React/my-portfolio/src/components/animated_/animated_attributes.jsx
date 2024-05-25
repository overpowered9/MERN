import React from 'react';
import 'animate.css/animate.min.css';
import Card from '../cards/card';
import adapt from '../../assets/adapt.png';
import solution from '../../assets/solution.png';
import equal from '../../assets/equal.png';
const AnimatedAttr = () => {
    return (
        <div className=" bg-[#3c7a89] p-[10px] justify-center overflow-hidden flex flex-row flex-wrap animate__animated animate__fadeInUp animate__slow">
            <Card imageSrc={adapt} text='Adaptability'></Card>
            <Card imageSrc={solution} text='Problem solving' ></Card>
            <Card imageSrc={equal} text='Attention to detail'></Card>
        </div>
    );
};

export default AnimatedAttr;