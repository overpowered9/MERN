import React  from "react";
function Card(props){
    return(<>
    <div className="bg-[#5ea5b6] w-[300px] pt-5 pb-5 flex gap-7 flex-col justify-between border-solid rounded-xl items-center align-middle  overflow-hidden font-mono font-normal">
        <img className='w-[100px] aspect-auto' src={props.imageSrc} alt="" />
        <p className=" font-semibold">{props.text}</p>
        
    </div>
    </>)
}
export default Card;