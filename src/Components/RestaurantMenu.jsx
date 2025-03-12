import React from 'react'
import { useParams } from 'react-router';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';




const RestaurantMenu = () => {


    const {resId}=useParams();


    const data=useRestaurantMenu(resId);
   

 

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
