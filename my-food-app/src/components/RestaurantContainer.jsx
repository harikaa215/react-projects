import { useEffect, useState } from "react";
import Restaurant from "./Restaurant"

const RestaurantContainer = ({resData}) =>{

  
  return (
    <div className="flex flex-wrap">
        {resData.length > 0 && resData.map ((restaurant) => {
            return <Restaurant key={restaurant.info.id} resData = {restaurant}/>
        })}

    </div>
  )
}

export default RestaurantContainer