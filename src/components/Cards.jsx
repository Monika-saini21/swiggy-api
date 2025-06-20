import React from 'react'

function Cards({ data }) {
  console.log(data)
  return (
    <>
    <div className=''>
    <div>
      <img className='w-60 h-36 object-cover rounded-2xl ' src={`https://media-assets.swiggy.com/swiggy/image/upload/${data.info.cloudinaryImageId}`} alt="" srcset="" />
  
      <h3 className='font-bold '>{data.info.name}</h3>
      <samp className='font-bold '>{data.info.avgRating}<samp className='relative bottom-1 font-bold'>.</samp>{data.info.sla.deliveryTime}mins </samp>
      <p className='truncate'>{data.info.cuisines.join(', ')}</p>
      <p>{data.info.areaName}</p>
    </div>
    </div>
    </>
  );
}

export default Cards;