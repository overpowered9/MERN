import Header from './components/header';
import Intro from './components/intro/intro';
import AnimatedImage from './components/animated_/animatedimage';
import AnimatedAttr from './components/animated_/animated_attributes';
import AboutMe from './components/about';
function App() {
  console.log("server is on")
  return (
    <>
    <div className=" bg-[#16262e]">
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
    </>
    
  );
}

export default App;
