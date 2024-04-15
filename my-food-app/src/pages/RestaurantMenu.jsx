import { IMG_URL, RES_IMG_URL, RES_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import RestaurantCategory from "../components/RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { id } = useParams();
  const { data, isLoading } = useFetch(RES_URL + id)

  if (data === null || isLoading === true) {
    return <div className="shimmer_card"></div>;
  }

  const { name, cloudinaryImageId, cuisines, costForTwoMessage } =
    data?.cards[2]?.card?.card?.info || "";

  const fetchedData = data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;

  if (fetchedData === null) {
    return;
  }

  const { itemCards } =
    "itemCards" in fetchedData.cards[1]
      ? fetchedData.cards[1].card.card
      : fetchedData.cards[2].card.card;

  const categories = fetchedData.cards.filter(
    (c) => c?.card?.["card"]?.["title"]
  );

  return (
    <div className="text-center flex flex-col justify-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="text-lg mb-5">
        {cuisines.join(", ")} <span>{costForTwoMessage}</span>
      </p>
      <img
        src={IMG_URL + cloudinaryImageId}
        className="w-[350px] h-[200px] m-auto object-cover mb-10"
      />

      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            key={category?.data?.card?.card?.title}
            data={category?.card?.card}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
