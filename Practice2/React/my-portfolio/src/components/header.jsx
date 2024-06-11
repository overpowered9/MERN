import { useState } from 'react';
import '../App.css';
import '../index.css';
import SideBar from './sidebar';
function Header(){
  const [isMenuopened,setmenuopened]=useState(false);
  const handleMenu=()=>{
if(isMenuopened){
  setmenuopened(false);
}else{
  setmenuopened(true);
}
  };
    return(
      <>
      <div className="h-[12vh] justify-around pt-10 bg-slate-600 border-b-2 border-blue-100 flex flex-row justify-items-center font-extrabold text-lg font-mono flex-wrap sm:h-[100px]  md:justify-around">
        <div className="bg-transparent"><p className="text-yellow-50 ">Zaid Asghar virk</p></div>
        <nav className="hidden md:flex ml-[40px]  space-x-4">
          <a href="home" className="text-white hover:text-red-700 ">Home</a>
          <a href="about" className="text-white hover:text-red-700">About</a>
          <a href="Portfolio" className="text-white hover:text-red-700">Projects</a>
          <a href="Contact" className="text-white hover:text-red-700">Contact</a>
        </nav>
        
      <button className='flex md:hidden text-yellow-50 align-top' onClick={handleMenu}>MENU</button>
      </div>
      <div className={isMenuopened?'':'hidden fixed left-[-300px]'}>
      <SideBar/>
      </div>
      </>
    )
}
export default Header;