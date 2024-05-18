import React from 'react';
import 'animate.css/animate.min.css';
import Card from '../cards/card';
const AnimatedAttr = () => {
    return (
        <div className=" p-[10px] justify-center overflow-hidden flex flex-row flex-wrap animate__animated animate__fadeInUp animate__slow">
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    );
};

export default AnimatedAttr;