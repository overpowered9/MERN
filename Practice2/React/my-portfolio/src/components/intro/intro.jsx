import React from 'react';
import { Typewriter } from 'react-simple-typewriter'

const Intro = () => {
    return (
        <div className="w-[60vw] p-[5vw]"> 
        
            <div style={
{color:'white',fontWeight:'bold',fontFamily:'monospace', fontSize:'40px'}
            }>
                <p className="font-mono text-sm sm:text-xl font-extrabold">Hi, I am</p>
            <Typewriter cursor typeSpeed={100} className="font-mono text-sm"
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