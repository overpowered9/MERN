import React from 'react';
import 'animate.css/animate.min.css';
import Card from '../cards/card';
const Animated_Attr = () => {
    return (
        <div className=" flex flex-row animate__animated animate__fadeInUp animate__slow">
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    );
};

export default Animated_Attr;