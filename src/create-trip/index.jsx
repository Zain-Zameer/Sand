import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { Input } from "@/components/ui/input"
import { SelectTravelesList } from '@/constants/options';
import { budgets } from '@/constants/budgets';
import { toast } from 'sonner';
import { AI_PROMPT } from '@/constants/prompts';
import { generateWithGemini } from '@/service/AIModal';
import GoogleIcon from '../assets/google.png';
import { doc, setDoc } from "firebase/firestore";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { db } from '@/service/firebaseConfig';
import { useNavigate } from 'react-router-dom';


function CreateTrip() {
  const [place, setplace] = useState();
  const [formData,setFormData] = useState()
  const [openDialog, setopenDialog] = useState(false)
  const [loadingState, setloadingState] = useState(false)
  const router = useNavigate()

  const handleInputChange = (name,value)=>{

   
    setFormData({
      ...formData,
      [name]:value
    })
  }
  const login = useGoogleLogin({
    onSuccess:(codeResp)=>getUserProfile(codeResp),
    onError:(error)=>console.log(error)
  })

  const getUserProfile = (tokenInfo)=>{
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?acess_token=${tokenInfo.access_token}`,{
      headers:{
        Authorization:`Bearer ${tokenInfo?.access_token}`,
        Accept:'Application/json'
      }
    }).then((resp)=>{
      localStorage.setItem('user',JSON.stringify(resp.data));
      setopenDialog(false)
      onGenerateTrip()
    })
  }
  // useEffect(() => {
  //   console.log(formData)
  // }, [formData])
  
  const onGenerateTrip = async()=>{
    const user = localStorage.getItem('user');
    if(!user){
      setopenDialog(true)
      return;
    }

    if(formData?.noOfDays > 5 && !formData?.location || !formData?.budget || !formData?.traveler){
      toast.error("Please fill all details correctly.");
      return;
    }
    
    setloadingState(true)
    const FINAL_PROMPT = AI_PROMPT
    .replace('{noOfDays}',formData?.noOfDays)
    .replace('{people}',formData?.traveler)
    .replace('{location}',formData?.location.label)
    .replace("{budget}",formData?.budget)
    .replace('{noOfDays}',formData?.noOfDays)
    
    // console.log("agent working")
    const result = await generateWithGemini(FINAL_PROMPT);
    // console.log("data saving")
    SaveAiTrip(result)

  }

  const SaveAiTrip = async(tripData)=>{
    const user = JSON.parse(localStorage.getItem('user'))
    const docID = Date.now().toString()
    await setDoc(doc(db, "AITrips", docID), {
      userSelection:formData,
      TripData:tripData,
      userEmail:user?.email,
      id:docID
    });
    // console.log("data saved")
    setloadingState(false)
    router('/view-trip/'+docID)
  }

  return (
    <div className='sm:px-10 mb-20 md:px-32 lg:px-56 xl:px-10 px-5 mt-10 flex flex-col justify-center items-center'>
       <h2 className='font-bold text-3xl'>Tell us your travel preferences</h2>
       <p className='mt-3 text-gray-500 text-xl'>Just provide us with your travel preferences and we'll do the rest</p>

       <div className='mt-10 flex flex-col gap-10'>
        <div>
          <h2 className='text-xl my-3 font-medium'>What is destination of choice?</h2>
          <p className='text-gray-500 text-lg'>Select the destination that best suits your travel preferences.</p>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange:(v)=>{setplace(v);handleInputChange('location',v)},
              
            }}
          />
        </div>

        <div className=''>
          <h2 className='text-xl my-3 font-medium'>How many days are you planning your trip</h2>
          <Input onChange={(e)=>handleInputChange('noOfDays',e.target.value)} placeholder={'Ex.3'} type='number'/>
      </div>

      <div>
          <h2 className='text-xl my-3 font-medium'>What is Your Budget?</h2>
          <p className='text-gray-500 text-lg'>The budget is exclusively allocated for activities and dining purposes.</p>

          <div className='flex gap-10 mt-10 '>

          {
            budgets && budgets.length>0 &&
            budgets.map((item,id)=>(
              <div
                onClick={()=>handleInputChange('budget',item.title)}
                key={id}
                className={`rounded-[10px] p-3 pr-19 flex flex-col gap-1 border-[1px]  cursor-pointer hover:shadow-lg transition-shadow duration-200 ${formData?.budget==item.title?'border-black border-[2px]':''}`}
              >
                <i className='fas fa-money-bill-wave'></i>
                <span className='font-semibold'>{item.title}</span>
                <p className='text-gray-500 text-[13px] font-semibold'>{item.range}</p>
              </div>

            ))
          }
        </div>

        
      </div>


      <div className=''>
      <h2 className='text-xl font-medium'>Who do you plan on traveling with on your next adventure?</h2>
          <div className='flex gap-5 flex-wrap mt-11'>
          
          {
            SelectTravelesList && SelectTravelesList.length > 0 &&
            SelectTravelesList.map((item,id)=>(
              <div key={id}
              onClick={()=>handleInputChange('traveler',item.people)}
              className={`cursor-pointer hover:shadow-lg transition-shadow duration-200 rounded-[10px] p-3 pr-19 flex flex-col gap-1 border-[1px]  ${formData?.traveler==item.people?'border-black border-[2px]':''}`}>
              <i className={item.icon}></i>
              <span className='font-semibold'>{item.title}</span>
            </div>
            ))
          }
          </div>

      </div>

      <div className='flex justify-end '>
        {loadingState?<Button className="bg-white border-gray hover:bg-white border-[1px]">
          <DotLottieReact
            
              src="https://lottie.host/119fc75a-447e-4382-a519-321aa691ccee/dDbC7mg8P0.lottie"
              loop
              autoplay
              className="w-32 h-32"
            />
        </Button>:<Button onClick={onGenerateTrip} className="cursor-pointer"><i className='fas fa-campground'></i> Generate Trip</Button>}
      </div>
          

      <Dialog open={openDialog}>
  <DialogContent>
    <DialogHeader>
      <DialogDescription>
        <img src="/logo.png" width={52} alt="" />
        <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Sign In With Google</h2>
        <p className="text-sm text-gray-500 mt-2">
          Sign in to the app with Google authentication securely
        </p>
        <Button onClick={login} className='mt-4 cursor-pointer w-full'><img width={20} src={GoogleIcon} alt="" />Sign In With Google </Button>
      </div>
          
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

       </div>
      
      
        
    </div>
  )
}

export default CreateTrip