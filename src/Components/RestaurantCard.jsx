import React from 'react'

const RestaurantCard = ({res}) => {


    const { id,name,cuisines,cloudinaryImageId,avgRating,costForTwo } = res; // If res is undefined or null, it defaults to an empty object

    const image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +cloudinaryImageId;

    

    

  
   

   

   


  return (
    <div className="resCard h-[300px] w-[175px] border-black border-2 border-solid m-1 p-1 rounded-md flex flex-col justify-center items-center overflow-clip">
        <img className="h-[50%] w-auto object-cover rounded-md" src={image}></img>
        <div>{name}</div>
        <div className="resName">{id}</div>
        <div className="resType">{}</div>
        <div className="flex justify-between"> 

            <div className="resRating p-2">{costForTwo}</div>
        <div className="resPrice p-2">{avgRating}</div>

        </div>
       
        <div className="resLocation">{cuisines.join(",")}</div>




    </div>
  )
}

export default RestaurantCard;
