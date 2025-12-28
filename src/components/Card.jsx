import React, { useContext, useEffect } from 'react'
import { Authcontext } from '../contexts/Authcontext'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Productcontext } from '../contexts/Productcontext';
import { Cartcontext } from '../contexts/Cartcontext';

const Card = ({ products, qty, setQty }) => {
  const { addproduct } = useContext(Cartcontext)
  const { addtofav, removefav } = useContext(Productcontext)
  const incrementqty = (id) => {
    setQty((prev) => (
      { ...prev, [id]: (prev[id] || 1) + 1, }))
  }
  const decrementqty = (id) => {
    setQty((prev) => ({
      ...prev, [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }))
  }

  return (
    <div className=' shadow-2xl backdrop-blur-sm rounded-xl grid sm:grid-cols-1 place-items-center   md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 gap-4 overflow-hidden'>
      {
        products.map((x) => {
          return (
            <div key={x.id} className='overflow-hidden bg-gray-900 rounded-xl    w-[300px]  hover:shadow-xl hover:scale-105 duration-200  ' >
              <div className='relative '>
                <img className='w-full h-40 object-cover rounded-xl hover: duration-200' src={x.productimg} alt="" />
                {
                  !x.fav ?
                    <FaRegHeart className='m-2 hover:cursor-pointer  size-5 text-black absolute right-0 top-0 ' onClick={() => {
                      addtofav(x)
                    }} /> :
                    <FaHeart className='m-2 size-6 ease-in-out hover:cursor-pointer text-red-600 absolute right-0 top-0 ' onClick={() => {
                      removefav(x)
                    }} />
                }
              </div>
              <div className=' text-white mt-3 ml-2 '>
                <h1>{x.productname}</h1>
                <h2>Price:Rs {x.productprice}</h2>
                <p className='break-all w-[200px]'>{x.productdetails}</p>
                <div className='flex gap-2'>Quantity<button onClick={() => {
                  decrementqty(x.id)
                }} className='hover:cursor-pointer'>-</button><div className='flex justify-center hover:cursor-pointer bg-white w-8 text-black rounded-xl '>{qty[x.id] || 1} </div> <button onClick={() => {
                  incrementqty(x.id)
                }} className='hover:cursor-pointer'>+</button></div>
              </div>
              <div className='flex justify-center p-3'>
                <button className='hover:cursor-pointer active:scale-98  lg:w-200 md:w-150 sm:w-100 w-50 bg-white text-black rounded-xl border-1 p-2  hover:shadow-xl hover:border-none hover:bg-white hover:scale-104  duration-200' onClick={() => {
                  addproduct(x, qty)
                }}>add to cart</button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
export default Card
