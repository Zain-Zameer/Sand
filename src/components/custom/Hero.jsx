import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
function Hero() {



  useEffect(() => {
    toast("Welcome Newbie!",{
      position:"bottom-right"
    });
  }, [])
  
  

  return (
    <>
    <div className=''>

     <div className='w-full relative'>
        <img className='w-full object-cover h-220 opacity-[0.7]' src="/HeroImg.jpg" alt="" />

        <div className='absolute top-1/4 w-full flex flex-col gap-10 px-10'>
          <h2 className="text-9xl text-white font-bold tracking-wide text-center">SAND</h2>
<p className="mt-4 bg-white w-fit p-2 text-xl italic">Sarah: Discover perfect spots around you</p>
<p className="text-lg bg-black w-fit p-2 text-gray-200">Asim: Turn every moment into a memory — one location at a time.</p>

          <div className='flex justify-end'>
            <p className="text-lg bg-black w-fit p-2 text-gray-200">Me: I'm finally ready to go on vacations!</p>
          </div>
          <div className='flex justify-start'>
            <p className="text-lg bg-black w-fit p-2 text-gray-200">Joseph: Type the Location, You'll find it.</p>
          </div>

        </div>

      </div>

      <div className='flex flex-col items-center mx-56 gap-9'>
          <h2 className="font-extrabold text-[60px] text-center mt-40"><span className='text-blue-500'>Escape to Paradise</span>: Let AI Find Your Ideal Beach & Stay</h2>
          <p className='text-center text-xl font-semibold text-gray-500'>Discover the perfect beach destination and book your dream stay with AI-powered recommendations.</p>
          
          <Link to="/create-trip">
              <Button className="w-full cursor-pointer bg-teal-500 hover:bg-teal-600 text-white font-semibold px-40 py-10 rounded-xl shadow-md transition duration-300 ease-in-out">
              Free Access to Paradise
              </Button>
          </Link>
      </div>

        <div className='mt-10 px-10 flex justify-center center gap-10'>
            <div className='relative w-220 h-[500px]'>
              <img className='rounded-xl object-cover w-220' src="/family3.jpg" alt="" />
               <div className="absolute rounded-xl top-0 left-0 w-full h-141 bg-black/10"></div>
               <div className='absolute bottom-0 w-full px-4 pb-6'>
                  <h3 className='text-center font-semibold text-white text-2xl'>Cherish the Moments</h3>
                  <p className='text-center text-white/80 mt-2'>
                    Time with loved ones is never wasted — it's the heartbeat of tomorrow's memories.
                  </p>
                </div>


            </div>

            <div className='flex flex-col justify-center'>
                <h3 className='font-bold text-5xl underline mb-5'>Summer Times</h3>
                <div className='flex items-center gap-5'>
                  <div className='bg-[#8cfffb] p-2 rounded-[50px]'>
                      <img src="/girl.png" alt="" className='w-10'/>
                  </div>  
                <p>
                  It was a good experience using this application as saves lot of time exploring.
                </p> 
                </div>
                <div className='text-end'>
                  <p className='italic text-sm'>Maryam Maheen Khan - 10 August 2025</p>
                </div>
                  <div className='bg-black h-10 w-[2px]'> 
                  
                  </div>
                  <div className='flex items-center gap-5'>
                  <div className='bg-[#8ccffb] p-2 rounded-[50px]'>
                      <img src="/boy.png" alt="" className='w-10'/>
                  </div>  
                <p>
                  Wish I found it earlier.
                </p> 
                </div>
                <div className='text-end'>
                  <p className='italic text-sm'>Amjad Nadeem - 2 May 2025</p>
                </div>
                <div className='bg-black h-1 w-full mt-5'> 
                  
                  </div>
            </div>
        </div>

        <div className="relative mt-30 group">
            <img 
              className="object-cover h-[400px] w-full opacity-80" 
              src="/family2.jpg" 
              alt="Family" 
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-100 transition duration-300">
              <h2 className="text-white text-3xl font-bold">Reconnect. Reflect. Relive.</h2>
              <p className="text-white text-lg mt-2 text-center px-4">
                Family moments are threads in the fabric of forever.
              </p>
            </div>
          </div>

      <div className="flex justify-center items-center bg-black w-full py-4">
        <p className="text-white text-sm tracking-wide">
          © {new Date().getFullYear()} SAND. All rights reserved.
        </p>
      </div>

      
      </div>

    </>
  )
}

export default Hero
