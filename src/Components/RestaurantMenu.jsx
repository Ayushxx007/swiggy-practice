import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router';
import Shimmer from './Shimmer';

const datax="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.91360&lng=75.78580&restaurantId=";



const RestaurantMenu = () => {

    const [data,setData]=useState(null);
    const {resId}=useParams();
   

    useEffect(()=>{

        fetchData();


    },[]);

    fetchData = async () => {
        const response = await fetch(datax+resId);
        const data = await response.json();

       const myData= data?.data?.cards[2]?.card?.card?.info;
       setData(myData);
      

        
    }

    if(data===null){
        return <Shimmer/>;

    }else{
        return (
            <div>
                <div> {data?.name}</div>
                <div>{data?.id}</div>
                <div>{data?.costForTwo}</div>
                <div>{data?.avgRating}</div>
                <div></div>
        
            </div>
          )

    }





}

export default RestaurantMenu;
