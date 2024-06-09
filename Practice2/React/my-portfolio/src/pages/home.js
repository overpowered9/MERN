import Header from '../components/header';
import Intro from '../components/intro/intro';
import AnimatedImage from '../components/animated_/animatedimage';
import AnimatedAttr from '../components/animated_/animated_attributes';
import ContactUS from '../components/Contactus';
function HomePage() {
  console.log("server is on")
  return (
    <>
    <div className=" bg-[#245167]">
    <Header></Header>
    <div className="min-h-[162px] flex flex-row sm:flex-row-reverse">
  <Intro></Intro>
  <AnimatedImage></AnimatedImage>
</div>
    </div>
    <div className=' w-[100%] overflow-hidden'>
   <AnimatedAttr></AnimatedAttr> 
   </div>
   <div><ContactUS></ContactUS></div>
    </>
    
  );
}

export default HomePage;
