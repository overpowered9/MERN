import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import reportWebVitals from './reportWebVitals';
import Header from './components/header';
import Intro from './components/intro/intro';
import AnimatedImage from './components/animated_/animatedimage';
import AnimatedAttr from './components/animated_/animated_attributes';
import AboutMe from './components/about';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <div className=" bg-slate-400">
    <Header></Header>
    <div className="min-h-[162px] flex flex-row sm:flex-row-reverse">
  <Intro></Intro>
  <AnimatedImage></AnimatedImage>
</div>
    </div>
    <div className=' w-[100%] overflow-hidden'>
   <AnimatedAttr></AnimatedAttr> 
   </div>
   <div><AboutMe></AboutMe></div>
   
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
