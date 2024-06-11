import Header from '../components/header';
import Intro from '../components/intro/intro';
import AnimatedImage from '../components/animated_/animatedimage';
import AnimatedAttr from '../components/animated_/animated_attributes';
import AnimatedAttrSC from '../components/animated_/animated_Scroll';
import ContactUS from '../components/Contactus';
import { useState } from 'react';
import { useEffect } from 'react';
function HomePage() {
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 1000);
  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth < 1000);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  console.log("server is on")
  return (
    <>
    <div className=" bg-[#245167]">
    <Header></Header>
    <div className="ml-0 h-[88vh] flex flex-col justify-between sm:flex-row sm:h-auto overflow-hidden md:ml-[180px]">
  <Intro></Intro>
  <AnimatedImage></AnimatedImage>
  
</div>
    </div>
    <div className=' w-[100%] overflow-hidden'>
        {isScreenSmall?<AnimatedAttrSC/>:<AnimatedAttr/>}
   
   </div>
   <div><ContactUS></ContactUS></div>
    </>
    
  );
}

export default HomePage;
