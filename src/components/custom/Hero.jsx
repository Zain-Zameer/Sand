import React, { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
function Hero() {
  useEffect(() => {
    toast("Welcome Newbie!",{
      position:"bottom-right"
    });
  }, [])

  const imageRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  useGSAP(()=>{
    gsap.to(imageRef.current,{
      scale: 1.1,
      ease: 'power2.out',
      duration: 20,
      opacity: 1,
      
    }),
    gsap.from(videoRef.current,{
      scale: 1.2,
      ease: 'power2.out',
      duration: 3,
      opacity: 0,
    })

  },[currentSlide])

  useGSAP(()=>{
    gsap.to(".top_text",{
      opacity:1,
      ease: 'power2.out',
      duration:3
    })
  },[])

  const slides = [
    { type: 'image', src: '/HeroImg.jpg' },
    { type: 'image', src: '/HeroImg2.jpg' },
    { type: 'image', src: '/HeroImg3.jpg' },
    { type: 'video', src: '/HeroVideo.mp4' },
  ];
  const videoRef = useRef(null);
  
   useEffect(() => {
    let timer;
    if (slides[currentSlide].type === 'image') {
      timer = setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 7000);
    } else if (slides[currentSlide].type === 'video') {
      const video = videoRef.current;
      if (video) {
        video.play();
        video.onended = () => {
          setCurrentSlide(0); 
        };
      }
    }
    return () => clearTimeout(timer);
  }, [currentSlide]);
  

  return (
    <>
    <div className='overflow-hidden'>

     <div className='w-full relative'>
        {slides[currentSlide].type=='image'?
          <img ref={imageRef} key={currentSlide} className='w-full object-cover h-220 opacity-[0.1]' src={slides[currentSlide].src} alt="" />
        :
        <video ref={videoRef} src={slides[currentSlide].src} muted playsInline className='w-full h-220 object-cover'/>
        }

        <div className='absolute top-1/4 w-full flex flex-col gap-10 px-10'>
          <h2 className="top_text text-7xl md:text-9xl text-white font-bold tracking-wide text-center opacity-0">SAND</h2>
<p className="top_text mt-4 bg-white w-fit p-2 text-sm md:text-xl italic">Sarah: Discover perfect spots around you</p>
<p className="top_text text-sm md:text-xl bg-black w-fit p-2 text-gray-200">Asim: Turn every moment into a memory — one location at a time.</p>

          <div className='flex justify-end'>
            <p className="bg-black w-fit p-2 text-sm md:text-xl text-gray-200">Me: I'm finally ready to go on vacations!</p>
          </div>
          <div className='flex justify-start'>
            <p className="text-sm md:text-xl bg-black w-fit p-2 text-gray-200">Joseph: Type the Location, You'll find it.</p>
          </div>

        </div>

      </div>

      <div className='flex flex-col items-center mx-20 md:mx-56 gap-9'>
          <h2 className="font-extrabold text-[40px] md:text-[60px] md:text-center mt-30 md:mt-40"><span className='text-blue-500'>Escape to Paradise</span>: Let AI Find Your Ideal Beach & Stay</h2>
          <p className='text-center text-sm md:text-xl font-semibold text-gray-500'>Discover the perfect beach destination and book your dream stay with AI-powered recommendations.</p>
          
          <Link to="/create-trip">
              <Button className="md:w-full cursor-pointer bg-teal-500 hover:bg-teal-600 text-white font-semibold md:px-40 md:py-10 rounded-xl shadow-md transition duration-300 ease-in-out">
              Free Access to Paradise
              </Button>
          </Link>
      </div>

        <div className='mt-10 px-10 flex flex-col md:flex-row justify-center center gap-10'>
            <div className='relative w-220 h-[240px] md:h-[500px]'>
              <img className='rounded-xl object-cover w-60 md:w-220' src="/family3.jpg" alt="" />
               <div className="absolute opacity-0 md:opacity-1 rounded-xl top-0 left-0 md:w-full md:h-141 bg-black/10"></div>
               <div className='absolute bottom-0 w-full md:px-4 md:pb-6'>
                  <h3 className='text-center font-semibold opacity-0 md:opacity-1 md:text-white text-2xl'>Cherish the Moments</h3>
                  <p className='text-center opacity-0 md:opacity-1 md:text-white/80 mt-2'>
                    Time with loved ones is never wasted — it's the heartbeat of tomorrow's memories.
                  </p>
                </div>


            </div>

            <div className='flex flex-col justify-center'>
                <h3 className='font-bold text-3xl md:text-5xl underline mb-5'>Summer Times</h3>
                <div className='flex items-center gap-5'>
                  <div className='bg-[#8cfffb] p-2 rounded-[50px]'>
                      <img src="/girl.png" alt="" className='w-20 md:w-10'/>
                  </div>  
                <p className='text-sm'>
                  It was a good experience using this application as saves lot of time exploring.
                </p> 
                </div>
                <div className='text-end'>
                  <p className='italic text-sm font-bold'>Sara Khan - 10 August 2025</p>
                </div>
                  <div className='bg-black h-10 w-[2px]'> 
                  
                  </div>
                  <div className='flex items-center gap-5'>
                  <div className='bg-[#8ccffb] p-2 rounded-[50px]'>
                      <img src="/boy.png" alt="" className='w-9 md:w-9'/>
                  </div>  
                <p>
                  Wish I found it earlier.
                </p> 
                </div>
                <div className='text-end'>
                  <p className='italic text-sm font-bold'>Amjad Nadeem - 2 May 2025</p>
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
              <h2 className="text-white text-xl md:text-3xl font-bold">Reconnect. Reflect. Relive.</h2>
              <p className="text-white text-sm md:text-lg mt-2 text-center px-4">
                Family moments are threads in the fabric of forever.
              </p>
            </div>
          </div>

      </div>

    </>
  )
}

export default Hero
