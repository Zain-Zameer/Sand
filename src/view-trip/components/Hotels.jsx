import { GetPlaceDetails } from '@/service/GlobalApi'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const PHOTO_REF_URL = "https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=500&maxWidthPx=500&key="+import.meta.env.VITE_GOOGLE_PLACE_API_KEY

function Hotels({trip}) {
  const [imageLoaded, setimageLoaded] = useState(false)
  const [imageURLS, setImageURLS] = useState([])
  const getImgUrls = async (hostels) => {
  if (!hostels) return;

  try {
    const imgURLS = await Promise.all(
      hostels.map(async (item) => {
        const data = {
          textQuery: item?.hotelName,
        };

        const resp = await GetPlaceDetails(data);
        const photoName = resp?.data?.places?.[0]?.photos?.[1]?.name;

        if (photoName) {
          return PHOTO_REF_URL.replace('{NAME}', photoName);
        } else {
          return null;  
        }
      })
    );

    const filtered = imgURLS.filter(Boolean);
    setImageURLS(filtered);
    if (filtered.length > 0) {
      setimageLoaded(true);
    }

  } catch (err) {
    console.error("Failed to get image URLs:", err);
  }
};


  useEffect(()=>{
      trip&&getImgUrls(trip?.TripData?.hostels)
  },[trip])




  return (
    <div>
      <h2 className='text-xl mt-10 font-bold'>Hotel Recommendations</h2>
      <div className='flex flex-col sm:flex-row gap-7 mt-5'>
        {trip?.TripData?.hostels?.map((item,id)=>(
            <Link to={"https://www.google.com/maps/search/?api=1&query="+item?.hotelName+','+item?.hotelAddress} target="_blank">
            <div className='bg-gray-100 cursor-pointer w-70 h-80 hover:scale-110 transition-all flex flex-col items-center pt-5 rounded-xl' key={id}>
                {imageLoaded?
                  <img src={imageURLS[id]} className='rounded-xl w-[70%]' />:
                  <img src='/travel.jpg' className='rounded-xl w-[70%]' />}
                <div className='my-3 flex flex-col items-center gap-2'>
                    <h2 className='font-medium'>{item?.hotelName}</h2>
                    <h2 className='text-xs text-gray-500 text-wrap w-60'>{item?.hotelAddress}</h2>
                    <h2 className='text-sm text-gray-500'>${item?.price} Per Day</h2>
                    <h2 className='text-sm text-gray-500'>{item?.rating}/5 Rating</h2>

                </div>
            </div>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default Hotels
