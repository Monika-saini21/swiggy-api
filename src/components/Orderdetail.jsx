import React from 'react';
import { useFilters } from '../context/FilterContext';

function Orderdetail() {
  const { filters, toggleFilter } = useFilters();

  const filterOptions = [
    'Fast Delivery',
    'Ratings 4.5+',
    'Pure Veg',
    
    'Offers',
    
  ];

  return (
    <>
      <h2 className='ml-35 pt-4 font-bold pb-3 w-27 border-b-4 border-orange-500'>Order Online</h2>
      <hr className='ml-35 mr-37 shadow-md text-gray-300' />
      <p className='text-2xl font-bold ml-35 mt-4'>Restaurants with online food delivery in Bangalore</p>
      <ul className='flex flex-wrap gap-2.5 py-5 pl-35 text-sm font-semibold bg-white'>
        {filterOptions.map((filter) => (
          <li
            key={filter}
            onClick={() => toggleFilter(filter)}
            className={`cursor-pointer border shadow-sm p-1.5 px-3 rounded-3xl ${
              filters.includes(filter) ? 'bg-orange-500 text-white' : 'border-gray-300'
            }`}
          >
            {filter}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Orderdetail;