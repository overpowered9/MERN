import '../App.css';
import '../index.css';
function Header(){
  
    return(
      <>
      <div className="h-[100px] justify-around pt-10 bg-slate-600 border-b-2 border-blue-100 flex flex-row justify-items-center font-extrabold text-lg font-mono flex-wrap">
        <div className="bg-transparent"><p className="text-yellow-50 ">Zaid Asghar virk</p></div>
        <nav className="flex space-x-4">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">About</a>
          <a href="#" className="text-white">Projects</a>
          <a href="#" className="text-white">Contact</a>
        </nav>
      </div>
      </>
    )
}
export default Header;