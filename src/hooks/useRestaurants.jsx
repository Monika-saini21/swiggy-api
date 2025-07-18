import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useSearch } from '../context/Searchcontext';


function useRestaurants(){
      const { resId } = useParams();
      const [data, setData] = useState();
      const { setSearchTerm } = useSearch(); 
      const [searchFood, setSearchFood] = useState("");
     useEffect(() => {
        fetch(
          `/swiggy/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.638763&lng=74.8580233&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
        )
          .then((res) => res.json())
          .then((res) => setData(res))
          .catch((err) => console.error('Fetch error:', err));
      }, [resId]);
    
      useEffect(() => {
        setSearchTerm("");
      }, [resId]);

     const { name, cuisines, costForTwoMessage, avgRating, totalRatingsString, locality } =
    data?.data?.cards[2]?.card?.card?.info || {};

  const itemCards =
    data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];

 const filteredItems = itemCards?.filter((item) =>
    item.card.info.name.toLowerCase().includes(searchFood.toLowerCase())
  );

 return {data, name, cuisines, costForTwoMessage, avgRating, totalRatingsString, locality, filteredItems, searchFood, setSearchFood};

} 
export default useRestaurants;