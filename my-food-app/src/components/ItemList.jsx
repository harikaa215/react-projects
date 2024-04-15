import React from "react";
import { RES_IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import {addItem} from '../utils/cartSlice'

const ItemList = ({ list }) => {

  const dispatch = useDispatch()

  if (!list) {
    return <p className="text-left py-4">No items found for this category</p>;
  }

  return (
    <div>
      {list.map((item) => {
        const { id, name, description, price, imageId } = item.card.info;
        return (
          <div key={id} className="my-2 py-2 border-gray-200 border-b-2 flex">
            <div className="w-9/12 mr-10">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{name}</span>
                <span>₹{price / 100}</span>
              </div>
              <p className="text-justify text-xs mb-2">{description}</p>
            </div>

            <div className="w-3/12 ml-5 relative" >
             <button className="absolute bottom-0 left-8 px-1 text-white bg-black" onClick={() => dispatch(addItem({name, price}))}>Add +</button>
              <img
                className="w-[100px] h-[80px] object-fit"
                src={RES_IMG_URL + imageId}
                alt=""
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
