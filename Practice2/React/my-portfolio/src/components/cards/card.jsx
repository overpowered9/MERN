import React  from "react";
function Card(props){
    return(<>
    <div className="bg-[#3c7a89] p-20 pt-5 flex gap-4 flex-col justify-center items-center align-middle bg-white overflow-hidden font-mono font-normal">
        <img className='w-[100px] aspect-auto' src={props.imageSrc} alt="" />
        <p className=" font-semibold">{props.text}</p>
        <p>I am Good at problem Solving</p>
    </div>
    </>)
}
export default Card;