import React from 'react'
import { useState } from 'react';

const User = (props) => {
  const [count,setCount]=useState(0);

  let {name} = props;
  return (
    <div className="border-2 border-black border-solid h-[100px] w-[100px]">User
        <div>{name}</div>

        <div>
          {count}


        </div>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
       
    </div>
  
  )
}

export default User;