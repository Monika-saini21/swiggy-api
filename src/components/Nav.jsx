import React from 'react'

function Nav() {
  return (
    <div className='flex justify-start shadow-lg fixed bg-white'>
      <img className='h-10 m-4 ml-35 ' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_260/portal/m/seo/Logos/Swiggy/Swiggy%20logo-2.png" alt="" srcset="" />
     <span className=' mt-5 text-gray-300 text-2xl '>|</span>
     <img className='h-10 mt-4 ml-2' src="https://tse4.mm.bing.net/th?id=OIP.lrNKRCHzMvL8lozdvVeqdgHaHa&pid=Api&P=0&h=180" alt=""  />
     <p className='mt-6 font-bold text-lg'> Setup your precise location</p>
     <input className='bg-gray-100 text-lg font-semibold pl-3 ml-15 h-13 mt-2.5 rounded-lg w-120' type="text" value="" placeholder='Search for restaurant and food'/>
     <img className='w-6 h-6  relative top-6 bg-gray-100 right-8' src="https://cdn-icons-png.flaticon.com/128/54/54481.png" alt="" />
    <img className='w-13 ml-6 mt-3 h-13 mr-35 rounded-2xl' src="https://cdn-icons-png.flaticon.com/128/17468/17468741.png" alt=""  />
    </div>
  )
}

export default Nav
