import React, { useContext, useMemo } from 'react'
import { FaHeart } from "react-icons/fa";

import { Productcontext } from '../contexts/Productcontext';

const Favourites = () => {

  const {products,removefav}=useContext(Productcontext)
  const fav =products.filter(x=>{
    return x.fav==true
  })
  return (
    <div>
       {
        fav[0]==null?<div className='text-white flex mt-8 justify-center h-screen'><h1>Add some of  your Favourite shoes!</h1></div>:''
      }
    <div className='m-4 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-5'>
      
      {
      fav.map(x=>{
        return <div className=' relative text-white border  overflow-hidden border-white  rounded-xl' >
          <img className=' h-60 w-full object-cover' src={x.productimg} alt="" />
          <button className='cursor-pointer' onClick={()=>{removefav(x)}}>
          <FaHeart className='absolute top-3 right-2 border  rounded-xl p-1 size-7 text-red-600'/>
            
             </button>

         <div className='pl-2 p-3'>
           <h1>{x.productname}</h1>
          <h2>{x.productdetails}</h2>
          <h2>{x.productprice}</h2>
         </div>
        </div>
      })

}

    </div>
  
    </div>
    
  )
}

export default Favourites
