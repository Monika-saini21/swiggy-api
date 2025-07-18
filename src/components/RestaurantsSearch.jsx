function RestaurantsSearch({ setSearchFood, searchFood}) {
    
     return(
        <>
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
        </>
     )
}
export default RestaurantsSearch; 