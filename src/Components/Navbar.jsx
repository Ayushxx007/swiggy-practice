import React from 'react'
import { useState } from 'react';


const Navbar = () => {

  const[button,setButtion]=useState(true);
  const handleClick=()=>{
    setButtion(!button);
  }


  return (
    <div className="flex justify-between items-center h-16 text-black relative shadow-sm font-mono bg-stone-100 h-[100px]  ">
        <img className="h-30 w-30 object-cover p-3 m-2 opacity-[.9] block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB-APQ5S48JsDUABF5HJQ7-vf2BAsWPdCnfw&s"></img>
        <div className=" mr-10 flex justify-between items-center space-x-4 cursor-pointer">
            <div className="m-2 p-2 text-xl">Home</div>
            <div className="m-2 p-2  text-xl">About</div>
            <div className="m-2 p-2  text-xl">Services</div>
            <div className="m-2 p-2  text-xl">Contact</div>
            <button  onClick={handleClick} className="m-2 p-2  text-xl border-2 rounded-md">{button ? "login" : "logout"}</button>

        </div>
        


    </div>
  )
}

export default Navbar;
