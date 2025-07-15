import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/Cartcontext';
import { useSearch } from '../context/Searchcontext';

function Restaurants() {
  const { resId } = useParams();
  const [data, setData] = useState();
  const { addToCart } = useCart();
  const { searchTerm, setSearchTerm } = useSearch(); 
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

  return (
    <>
      <h2 className="text-2xl font-bold m-3 mt-9 ml-78 ">{name}</h2>

      <div className="w-180 ml-74 py-3 flex justify-center rounded-2xl overflow-hidden px-3">
        <div className="shadow-2xl shadow-gray-300 bg-white p-6 rounded-2xl w-180">
          <div className="flex font-bold text-">
            <img
              className="w-4 mt-1 mr-1 h-4 rounded-4xl bg-green-700"
              src="data:image/png;base64,..."
              alt=""
            />
            <p>{avgRating}</p>
            <p>({totalRatingsString})</p>
            <span className="relative bottom-0.5 mx-1 font-bold"> . </span>
            <p className="text-gray-700 font-medium">{costForTwoMessage}</p>
          </div>
          <p className="text-orange-600 my-1 font-bold underline text-sm">
            {cuisines?.join(', ')}
          </p>
          <p className="font-bold text-sm flex ">
            Outlet <span className="ml-2 text-gray-600">{locality}</span>
          </p>
        </div>
      </div>

  
      <div className="w-180 ml-74 mt-5 mb-3  ">
    <div className='flex items-center justify-center bg-white '>
<img
  src="https://cdn-icons-png.flaticon.com/128/16018/16018203.png"
  alt="Flipped Icon"
  className="transform -scale-x-100 w-9"
/>
        <p>Menu</p>
<img className='w-9' src="https://cdn-icons-png.flaticon.com/128/16018/16018203.png" alt="" srcset="" />

</div>
    <input
          type="text"
          placeholder="Search for dishes"
          className="bg-gray-100 px-4 py-2 rounded-md  w-180  text-center mt-5 p-6"
          value={searchFood}
          onChange={(e) => setSearchFood(e.target.value)}
        />
          <img className='w-6 h-6  relative bottom-8 bg-gray-100 left-172' src="https://cdn-icons-png.flaticon.com/128/54/54481.png" alt="" />
  
      </div>

      <div className="bg-white w-180 ml-74 my-5 p-6">
        <h3 className="text-xl font-semibold mb-7 underline">Recommended</h3>
        <ul>
          {filteredItems?.length === 0 && searchFood ? (
            <div className='w-130 ml-20 p-6 bg-gray-100 rounded-lg shadow-lg'>
              <img className='ml-45' src="https://cdn-icons-png.flaticon.com/128/308/308556.png" alt="" srcset="" />
            <p className=" text-center">No matching items found.</p>
            </div>
          ) : (
            filteredItems?.map((item) => {
              const info = item.card.info;
              const isVeg = info.itemAttribute?.vegClassifier === 'VEG';

              return (
                <li
                  key={info.id}
                  className="flex mt-7 justify-between items-start border-b border-gray-500"
                >
                  <div className="flex-1 pr-4">
                    <div className="flex items-center gap-2 mb-1">
                      <div className={isVeg ? 'text-green-600' : 'text-red-600'}>
                        <p className="border-3">
                          <div className="m-0.5 border-5 rounded-2xl"></div>
                        </p>
                      </div>
                      <p className="text-md font-semibold">{info.name}</p>
                    </div>
                    <p className="text-sm font-semibold mb-1">
                      ₹{info.price / 100 || info.defaultPrice / 100}
                    </p>
                    {info.ratings?.aggregatedRating?.rating && (
                      <span className="flex">
                        <img
                          className="w-4 mt-1 mr-1 h-4 rounded-4xl bg-green-700"
                          src="data:image/png;base64,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"
                          alt=""
                        />
                        {info.ratings.aggregatedRating.rating}
                      </span>
                    )}
                    {info.description && (
                      <p className="text-sm text-gray-500">{info.description}</p>
                    )}
                  </div>

                  <div className="flex flex-col items-center w-32">
                    {info.imageId && (
                      <img
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/${info.imageId}`}
                        className="w-32 h-28 object-cover rounded-md"
                        alt={info.name}
                      />
                    )}
                    <button
                      onClick={() => addToCart(info)}
                      className="bg-white relative bottom-4 border-2 transition duration-300 ease-in-out border-gray-300 font-bold text-green-600 text-lg px-6 py-1 rounded hover:bg-green-700 hover:text-white"
                    >
                      Add
                    </button>
                  </div>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </>
  );
}

export default Restaurants;