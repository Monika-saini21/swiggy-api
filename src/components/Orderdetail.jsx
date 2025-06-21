import React from 'react'

function Orderdetail() {
  return (
    <>
    <div className='flex text-lg pt-19'>
  <h2 className=' pt-4 ml-35 font-bold pb-3 border-b-5  border-orange-500'>Order Online</h2>
  <h2 className='text-gray-400 pt-4 pl-7'>Dineout</h2>
 
    </div>
    <hr className='ml-35 mr-37 shadow-2xl text-gray-300 '></hr>
    <p className='text-2xl  font-bold ml-35 mt-4'>Restaurants with online food delivery in Bangalore</p>
    <ul className='flex justify-start gap-2.5 mt-5 ml-35 text-sm font-semibold'>
    <li className='flex border-1 shadow-sm border-gray-300 p-1.5 pl-3.5 pr-3 rounded-3xl ' >Filter <img className='h-4 mt-1.5  ml-1.5' src="https://cdn-icons-png.flaticon.com/128/8017/8017777.png" alt="" /></li>
    <li className='flex border-1 shadow-sm border-gray-300 p-1.5 pl-3.5 pr-3 rounded-3xl'>Sort By <img className='h-4 mt-1.5 ml-1' src="https://cdn-icons-png.flaticon.com/128/2985/2985150.png" alt=""  /></li>
    <li className='border-1 shadow-sm border-gray-300 p-1.5 pl-3.5 pr-3 rounded-3xl'>Fast Delivery</li>
    <li  className='border-1 shadow-sm border-gray-300 p-1.5 pl-3.5 pr-3 rounded-3xl'>New on Swiggy</li>
    <li  className='border-1 shadow-sm border-gray-300 p-1.5 pl-3.5 pr-3 rounded-3xl'>Ratings 4.0+</li>
    <li  className='border-1 shadow-sm border-gray-300 p-1.5 pl-3.5 pr-3 rounded-3xl'>Pure Veg</li>
    <li  className='border-1 shadow-sm border-gray-300 p-1.5 pl-3.5 pr-3 rounded-3xl'>Offers</li>
    <li  className='border-1 shadow-sm border-gray-300 p-1.5 pl-3.5 pr-3 rounded-3xl'>Rs. 300-Rs. 600</li>
    <li  className='border-1  shadow-sm border-gray-300 p-1.5 pl-3.5 pr-3 rounded-3xl'>Less than Rs. 300</li>
    </ul>
    </>
  )
}

export default Orderdetail
