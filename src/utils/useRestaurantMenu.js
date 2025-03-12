import {useState,useEffect} from 'react';


const datax="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.91360&lng=75.78580&restaurantId=";


const useRestaurantMenu=(resId)=>{
    const [data,setData]=useState(null);
   
    useEffect(()=>{
        fetchData();
    },[]);
    fetchData = async () => {
        const response = await fetch(datax+resId);
        const data = await response.json();
        const myData= data?.data?.cards[2]?.card?.card?.info;
        setData(myData);
    }
    return data;
}

export default useRestaurantMenu;