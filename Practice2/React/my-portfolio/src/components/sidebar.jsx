function SideBar() {
  return (
    <div className="flex flex-col bg-gray-800 fixed top-0 left-0 h-[100vh] w-[50vw] z-10 ease-in transition-transform">
     <a href="home" className="text-white hover:text-red-700 ">Home</a>
          <a href="about" className="text-white hover:text-red-700">About</a>
          <a href="Portfolio" className="text-white hover:text-red-700">Projects</a>
          <a href="Contact" className="text-white hover:text-red-700">Contact</a>
    </div>
  );
}   
export default SideBar;