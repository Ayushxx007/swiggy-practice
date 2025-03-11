import React from 'react'
import RestaurantCard from './RestaurantCard';
import { useEffect,useState } from 'react';
import Shimmer from './Shimmer.jsx';

const Body = () => {

    const [resData,setResData]=useState([]);
    const [fillData,setFillData]=useState([]);
    const [searchText,setSearchText]=useState("");




    const fetchData=async()=>{
        const response =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.91360&lng=75.78580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data = await response.json();

        const resDataApi=data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setResData(resDataApi);
        setFillData(resDataApi);
       
       

    }
 

    useEffect(()=>{
        fetchData();


    },[]);

    
    if(resData.length===0){
      return  <Shimmer></Shimmer>;

    }else{
      return (
        <div>

          <div className="m-5 p-1">
          <input className="h-[50px] p-1 m-1 border-2 border-black rounded-md" type="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
          <button  className="btn-primary border-2 h-[50px] w-[80px] rounded-md  p-1 m-1 hover:bg-amber-700" onClick={()=>{

              let filter=resData.filter(ele => ele.info.name.toLowerCase().includes(searchText.toLowerCase())) 
              setFillData(filter);

          }}> Search</button>

         
          
          
      <button   onClick={()=>{  let filter=resData.filter(ele => ele.info.avgRating>4.2) 
          setFillData(filter);
           }  } className="btn-primary border-2 h-[50px] w-[80px] rounded-md  p-1 m-1 hover:bg-amber-700">filter</button>

          </div>
         
         
    
        <div className="body flex flex-wrap ">
             
    
    
    
    
              
                {
                    fillData.map((res)=>{ return(<RestaurantCard id={res.info.id} res={res.info}/>)
                    })
    
                   
    
                }
    
    
      
              
    
            
    
              </div>
              </div>
      
      
      )

    }

 
}

export default Body;

