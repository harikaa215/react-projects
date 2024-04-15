import { IMG_URL } from "../utils/constants";
import {useNavigate} from 'react-router-dom'

const Restaurant = ({resData}) => {

  const {name, avgRating, cloudinaryImageId, costForTwo, cuisines, sla, id} = resData.info;

  const navigate = useNavigate()

  const handleClick = (id) => {
    navigate('/restaurant/'+id)
  }

  return (
    <div className="flex flex-col flex-wrap w-25vw m-5" key={id}>
        <img className='w-[250px] h-48' src ={IMG_URL+cloudinaryImageId}/>
        <h4 className='font-bold' onClick={() => handleClick(id)}>{name}</h4>
        <p>⭐{avgRating}. <span>{sla.slaString}</span> <span>{costForTwo}</span></p>
        <p className="text-ellipsis">{cuisines.join(", ")}</p>
    </div>
  )
}

export default Restaurant