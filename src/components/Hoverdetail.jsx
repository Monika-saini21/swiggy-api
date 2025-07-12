
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/Cartcontext';

function Hoverdetail() {
 const {cartItems}= useCart()
 const [isHovered, setIsHovered] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
   const timeoutRef = useRef(null);
  
 let totalItem=0;
 
 cartItems?.map((item)=>{
   totalItem=totalItem+(item.inStock*item.price);
 })
 
   useEffect(() => {
     if (isHovered) {
       timeoutRef.current = setTimeout(() => {
         setShowDetail(true);
       }, 1000); 
     } else {
       clearTimeout(timeoutRef.current);
       setShowDetail(false);
     }
 
     return () => clearTimeout(timeoutRef.current);
   }, [isHovered]);
 
  return (
    <>
   
  <div
        className=" "
       onMouseEnter={() => setIsHovered(true)}
       onMouseLeave={() => setIsHovered(false)}
     >
     <Link to="/cart"><p className='font-semibold mt-6 flex '>Cart <p className='bg-orange-500 px-1  ml-1 text-white'>{cartItems.length}</p></p></Link>
    
      {showDetail && (
         <div className="absolute top-12 border-t-4 border-orange-500 right-29 w-74  bg-gray-100 shadow-lg  p-6 z-50">
          
           <ul className="text-sm text-gray-600 space-y-1">
             {cartItems.length>0?
             cartItems.map((item) => (
               
               <li className='flex gap-2 mb-0 pb-0 items-center border-gray-200 border-b-2' key={item.id}>
                  <img
                   src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
                   className= "w-10 h-10 object-cover "
                 alt={item.name}
                 />
                 
               <p className='w-35 mr-3 truncate'>{item.name}</p> 
               ₹{item.price / 100 || item.defaultPrice / 100}
              
               </li>
 
             ) 
           ):
             <div>
               <h1 className='text-2xl font-bold text-center mb-3'>Cart Empty</h1>
               <p className='ml-4'>Good food is always cooking!<br></br> Go ahead, order some,<br></br> yummy items from the menu.</p>
              
               
                
             </div>
             
             }
             </ul>
              {totalItem>0&&
                <p className='font-semibold text-gray-700 border-t-2 border-gray-700 text-sm  text-end'>total: ₹{totalItem /100 || defaulttotalItem/100}</p>
               }
         </div>
       )}
     </div>
   
    </>
  );
}

export default Hoverdetail;