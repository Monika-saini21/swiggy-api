import { useEffect, useState } from "react";
import { useSearch } from "../context/Searchcontext";

function useCards(){
     const{setAllData}=useSearch();
     const [data, setData] = useState({});

  useEffect(() => {
    fetch("/swiggy/dapi/restaurants/list/v5?lat=30.91460&lng=75.85430&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        const restaurants = res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        setAllData(restaurants);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

    return data;
       
}
export default useCards;