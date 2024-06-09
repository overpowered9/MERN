import '../App.css';
import '../index.css';
function Header(){
  
    return(
      <>
      <div className="h-[100px] justify-around pt-10 bg-slate-600 border-b-2 border-blue-100 flex flex-row justify-items-center font-extrabold text-lg font-mono flex-wrap">
        <div className="bg-transparent"><p className="text-yellow-50 ">Zaid Asghar virk</p></div>
        <nav className="ml-[40px] flex space-x-4">
          <a href="home" className="text-white hover:text-red-700 ">Home</a>
          <a href="about" className="text-white hover:text-red-700">About</a>
          <a href="Portfolio" className="text-white hover:text-red-700">Projects</a>
          <a href="Contact" className="text-white hover:text-red-700">Contact</a>
        </nav>
      </div>
      </>
    )
}
export default Header;