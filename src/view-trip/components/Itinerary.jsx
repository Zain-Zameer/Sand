import { GetPlaceDetails } from '@/service/GlobalApi'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const PHOTO_REF_URL = "https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=500&maxWidthPx=500&key="+import.meta.env.VITE_GOOGLE_PLACE_API_KEY

function Itinerary({trip}) {
  const [imageLoaded, setimageLoaded] = useState(false)
    const [imageURLS, setImageURLS] = useState([])
    
    const getImgUrls = async (hostels) => {
      if (!hostels) return;
    
      try {
        const imgURLS = await Promise.all(
          hostels.map(async (item) => {
            const data = {
              textQuery: item?.placeName,
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
    }
    
  
  
    useEffect(()=>{
        trip&&getImgUrls(trip?.TripData?.itinerary)
        // console.log(trip?.TripData?.itinerary)
    },[trip])
  
  return (
    <div>
      <h2 className='text-xl mt-10 font-bold'>Places to visit</h2>
      <div className='flex flex-wrap gap-7 mt-5'>
        {trip?.TripData?.itinerary?.map((item,id)=>(
            <Link to={"https://www.google.com/maps/search/?api=1&query="+item?.hotelName+','+item?.hotelAddress} target="_blank">
            <div key={id} className='bg-gray-100 gap-20 p-10  cursor-pointer w-160 hover:scale-104 h-fit transition-all flex  items-center pt-5 rounded-xl' >
                {imageLoaded?
                  <img src={imageURLS[id]} className='rounded-xl w-[45%]' />:
                  <img src='/travel.jpg' className='rounded-xl w-[45%]' />}
                <div key={id} className='my-3 flex flex-col gap-2'>
                    <h2 className='font-medium text-sm text-center'>{item?.placeName}</h2>
                    <h2 className='bg-[#00ffd5] p-2 rounded-xl text-center text-sm text-gray-500'>Best time: <span className='underline'>{item?.bestTimeToVisit}</span></h2>
                    <h2 className='text-xs text-gray-500 text-wrap w-60'>{item?.placeDetails}</h2>
                    <h2 className='text-sm text-gray-500'>Ticket: {item?.ticketPricing}</h2>
                    <h2 className='text-sm text-gray-500'>Time: <span className='text-[orange] font-semibold'>{item?.timeToTravel}</span></h2>

                </div>
            </div>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default Itinerary
