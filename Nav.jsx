
import { Link } from 'react-router-dom'

import Hoverdetail from './Hoverdetail';

import Search from './search';

function Nav() {

 return (
    <div className='flex justify-start shadow-lg sticky z-20 top-0  bg-white'>
     <Link to="/"><img className='h-10 m-4 ml-35 ' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_260/portal/m/seo/Logos/Swiggy/Swiggy%20logo-2.png" alt="" srcset="" /></Link> 
      <span className=' mt-5 text-gray-300 text-2xl '>|</span>
     <img className='h-10 mt-4 ml-2' src="https://tse4.mm.bing.net/th?id=OIP.lrNKRCHzMvL8lozdvVeqdgHaHa&pid=Api&P=0&h=180" alt=""  />
     <p className='mt-6 font-bold text-lg'> Setup your precise location</p>
   <Search/>
   <img className='w-6 h-6  relative top-6 bg-gray-100 right-8' src="https://cdn-icons-png.flaticon.com/128/54/54481.png" alt="" />
     <Hoverdetail/>
    
    </div>
  )
}

export default Nav