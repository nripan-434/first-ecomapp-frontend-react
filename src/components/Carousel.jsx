import React, { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";



const Carousel = () => {
      const [current,setCurrent]=useState(0)
    const [images,setimages]=useState([
      'https://images.pexels.com/photos/2016145/pexels-photo-2016145.jpeg',
    'https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg',
      
      'https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg',
    ])
    const slideNext=()=>{
      if(current>=images.length-1){
       return setCurrent(0)
      }
      setCurrent((prev)=>(prev+1))
      console.log(current)

    

    }
    const slidePrev=()=>{
      if(current<=0){
       return setCurrent(images.length-1)
      }
      setCurrent((prev)=>(prev-1))
      console.log(current)
     

    }
    useEffect(()=>{ 
            const interval=setInterval(() => {
          
      setCurrent((prev)=>(prev>=images.length-1?0:prev+1))
    }, 3000);
    return ()=>clearInterval(interval);

    },[]);
  return (
    
   <div className='overflow-hidden'>
    <div className=' '>
    <div  style={{ transform: `translateX(-${current * 100}%)` }} className=' relative flex transition-transform duration-300 ease-in-out '>
      {
            images.map((img,i)=>{
         return <img key={i}  className='object-cover h-110 flex-shrink-0 w-full '  src={img} alt="imgSrc" />


            })
      }
      
      
       
</div>
 <button className='absolute right-5 top-50 ' onClick={()=>{
          slideNext()
        }}><FaArrowRight className='size-7 text-white' /></button>
        <button className='absolute left-5 top-50' onClick={()=>{
          slidePrev()
        }}><FaArrowLeft className='size-7 text-white' /></button>
</div>
      
    </div>
  )
}

export default Carousel

