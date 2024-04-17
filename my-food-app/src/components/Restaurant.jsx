import { IMG_URL } from "../utils/constants";
import { useNavigate } from 'react-router-dom'

const Restaurant = ({ resData }) => {
  const { name, avgRating, cloudinaryImageId, costForTwo, cuisines, sla, id } = resData.info;

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate('/restaurant/' + id);
  }

  return (
    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-2 mb-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img className='w-full h-48 object-cover' src={IMG_URL + cloudinaryImageId} alt={name} />
        <div className="p-4">
          <h4 className='font-bold cursor-pointer' onClick={() => handleClick(id)}>{name}</h4>
          <p>⭐{avgRating}. <span>{sla.slaString}</span> <span>{costForTwo}</span></p>
          <p className="text-ellipsis">{cuisines.join(", ")}</p>
        </div>
      </div>
    </div>
  )
}

export default Restaurant;
