import { GetPlaceDetails } from '@/service/GlobalApi'
import React, { useEffect, useState } from 'react'

const PHOTO_REF_URL = "https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=1000&maxWidthPx=1000&key="+import.meta.env.VITE_GOOGLE_PLACE_API_KEY

function InfoSection({trip}) {

  const [photoURL,setPhotoURL] = useState("/travel.jpg")
  const getPlacePhoto = async()=>{
    const data = {
      textQuery:trip?.userSelection?.location?.label
    }
    const result = await GetPlaceDetails(data).then(resp=>{
      const PhotoURL = PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name)
      setPhotoURL(PhotoURL)
    })
  }
  useEffect(()=>{
    trip&&getPlacePhoto()
  },[trip])
  return (
    <div>
        <img src={photoURL} alt="" className='h-[300px] w-full object-cover rounded-xl' />

        <div className='my-5 flex flex-col gap-3'>
            <h2 className='font-bold text-2xl'>{trip?.userSelection?.location?.label}</h2>
            <div className='flex gap-10 mt-2'>
                <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 w-fit text-xs md:text-md'> <i className='fas fa-calendar-alt'></i> {trip?.userSelection?.noOfDays} Day</h2>
                <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 w-fit text-xs md:text-md'><i className='fas fa-money-bill-wave'></i> {trip?.userSelection?.budget} Budget</h2>
                <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 w-fit text-xs md:text-md'><i className='fas fa-user'></i> No of Traveler: {trip?.userSelection?.traveler}</h2>
            </div>
        </div>


    </div>
  )
}

export default InfoSection
