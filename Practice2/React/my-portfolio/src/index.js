import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import reportWebVitals from './reportWebVitals';
import Header from './components/header';
import Intro from './components/intro/intro';
import AnimatedImage from './components/animated_/animatedimage';
import Animated_Attr from './components/animated_/animated_attributes';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className=" bg-slate-400">
    <Header></Header>
    <div className="flex flex-col sm:flex-row-reverse">
  <Intro></Intro>
  <AnimatedImage></AnimatedImage>
</div>
    </div>
    <div className=' w-[100vw] overflow-hidden'>
   <Animated_Attr></Animated_Attr> </div>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
