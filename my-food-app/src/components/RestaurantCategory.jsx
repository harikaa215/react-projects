import { FaAngleDown } from "react-icons/fa6";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {
  
  const [show, setShow] = useState(false)

  return (
    <div className="w-6/12 m-auto my-3 bg-gray-50 shadow-lg p-4" onClick={() => setShow(!show)}>
      <div className="flex justify-between font-bold">
        <span>
          {data.title} ({data?.itemCards?.length || 0}){" "}
        </span>
        <span>
          <FaAngleDown />
        </span>
      </div>

      {show && <ItemList list={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
