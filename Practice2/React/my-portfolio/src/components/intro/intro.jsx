import React from 'react';
import { Typewriter } from 'react-simple-typewriter'

const Intro = () => {
    return (
        <div className=" w-[100vw] p-[5vw] sm:mt-12 sm:w-[60vw] overflow-hidden"> 
        <p className="font-mono text-2xl sm:text-xl font-extrabold">Hi, I am</p>
            <div className=" text-2xl text-[#5ea5b6] font-bold font-mono sm:text-3xl">
                
            <Typewriter cursor typeSpeed={100} 
            cursorStyle='.' cursorBlinking={false} words={['Zaid Asghar Virk']}></Typewriter> 
            <br /> 
           
            <Typewriter
                typeSpeed={200}
                deleteSpeed={50}
                delaySpeed={1000}
                cursor
                cursorStyle='_' loop={100} words={['Full Stack Web Developer','Mobile App Develepor']}></Typewriter>
            </div>
        </div>
    );
};

export default Intro;