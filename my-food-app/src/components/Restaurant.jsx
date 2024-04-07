import { IMG_URL } from "../utils/constants";

const Restaurant = ({resData}) => {

  const {name, avgRating, cloudinaryImageId, costForTwo, cuisines, sla} = resData.info;

  return (
    <div className="restaurant_card">
        <img src ={IMG_URL+cloudinaryImageId}/>
        <h4>{name}</h4>
        <p className="ratings">⭐{avgRating}.  <span>{sla.slaString}</span>  <span>{costForTwo}</span></p>
        <p className="cuisines">{cuisines.join(", ")}</p>
    </div>
  )
}

export default Restaurant