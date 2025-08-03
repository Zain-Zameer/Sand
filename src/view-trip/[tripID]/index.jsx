import { db } from '@/service/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner';
import InfoSection from '../components/InfoSection';
import Hotels from '../components/Hotels';
import Itinerary from '../components/itinerary';

function ViewTrip() {
    const {tripID} = useParams();
    const [userData, setuserData] = useState(null)

    const getTripData = async()=>{
        const docRef = doc(db,'AITrips',tripID);
        const docSnap = await getDoc(docRef)

        if(docSnap.exists){
            const data = docSnap.data()
            setuserData(data)
        }else{
            toast("No Trip Found.")
        }
    }

    useEffect(()=>{
        tripID && getTripData();
    
    },[tripID])
  return (
    <div className=' md:px-20 lg:px-44 xl:px-56 mb-20'>
        {/* {Information } */}
        <InfoSection trip={userData}/>
        {/* Recommended Hotels  */}
        <Hotels trip={userData}/>
        {/* Daily Plan  */}
        <Itinerary trip={userData} />

       
    </div>
  )
}

export default ViewTrip
