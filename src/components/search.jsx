import React from 'react'
import { useSearch } from '../context/Searchcontext';
import { Link } from 'react-router-dom';

function Search() {
 const { searchTerm, setSearchTerm, filtered}=useSearch()
 return (
    <>
    <form className=' left-142' onSubmit={(e) => setSearchTerm(e.target.value)} >
          <input
            type="text"
            value={searchTerm}
            placeholder="Search for restaurant and food "
            onChange={(e) => setSearchTerm(e.target.value)}
            className='bg-gray-100 text-lg font-semibold text-center ml-15 h-13 mt-2.5 rounded-lg w-120'
          />  
      <div className='absolute left-157 w-120 my-2 shadow-2xl bg-white'>
        
        {searchTerm.trim() !== "" && (
        <ul className="mt-4 space-y-2">
         {filtered.map((item) => (
       
           <Link key={item.info.id} to={`restaurants/${item.info.id}`}>
  <li key={item.info.id} className='flex items-center gap-2 p-4 border-b-2 mb-2 pb-2 border-gray-400  hover:bg-gray-300 cursor-pointer'>
     <img  className='w-10  h-10 object-cover   ' src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.info.cloudinaryImageId}`} alt="" srcset="" />
 
    <p className='text-lg ml-3 truncate '>{item.info.name}</p>
  </li>
  </Link>
  
))}

          {filtered.length === 0 && (
           
            <li className="text-gray-500 w-180 my-6 ml-40">
              <img className='w-33 h-33 ' src="https://cdn-icons-gif.flaticon.com/16496/16496468.gif" alt="" />
             <p className='ml-5'>Oops! Sorry</p>
             <p> No matching results</p></li>
          )}
        </ul>
      )}
      </div>
      </form>
    </>
  );
}

export default Search;