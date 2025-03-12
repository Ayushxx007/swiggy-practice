import React from 'react'
import { Link } from 'react-router';
import { useState } from 'react';
import useOnline from '../utils/useOnline';



const Navbar = () => {

  const[button,setButtion]=useState(true);
  const handleClick=()=>{
    setButtion(!button);
  }

  const isOnline=useOnline();


  return (
    <div className="flex justify-between items-center h-16 text-black relative shadow-sm font-mono bg-stone-100 h-[100px]  ">
        <img className="h-30 w-30 object-cover p-3 m-2 opacity-[.9] block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB-APQ5S48JsDUABF5HJQ7-vf2BAsWPdCnfw&s"></img>
        <div className=" mr-10 flex justify-between items-center space-x-4 cursor-pointer">
          <div className="m-2 p-2 text-xl">{isOnline ? "🟢 "+"online" :"🔴 "+ "offline"}</div>
            <div className="m-2 p-2 text-xl"><Link to="/">Home</Link></div>
            <div className="m-2 p-2  text-xl"><Link to="/about">About</Link></div>
            <div className="m-2 p-2  text-xl">  <Link to="/grocery">Grocery </Link></div>
            <div className="m-2 p-2  text-xl"><Link to="/contact">Contact</Link></div>
            <button  onClick={handleClick} className="m-2 p-2  text-xl border-2 rounded-md">{button ? "login" : "logout"}</button>

        </div>
        


    </div>
  )
}

export default Navbar;
