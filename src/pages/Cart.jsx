import React, { useContext, useEffect, useState } from 'react'
import { Cartcontext } from '../contexts/Cartcontext'
import { CiLineHeight } from 'react-icons/ci'
import { Ordercontext } from '../contexts/Ordercontext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const {  totalamount, cart, removeproduct } = useContext(Cartcontext)
      const navigate=useNavigate()

  const [total, setTotal] = useState(0)
  useEffect(() => {
    setTotal(totalamount(cart))

  }, [cart])

  return (
    <div>


      {
          cart[0]==null?<><div className='flex justify-center h-screen m-10'><h1 className='text-white'>Nothing added yet!</h1></div></>:''

      }
      

<div className='grid sm:grid-cols-3 p-4 gap-4 overflow-hidden'>
        {

          
          cart?.map(x => {
            return (
              <>
                <div key={x.id} className='scale-in-center relative border border-white text-white rounded-xl overflow-hidden hover:shadow-xl hover:scale-105 duration-200  ' >

                  <div className=''>
                    <img className='w-full h-40 object-cover hover:scale-105 duration-200' src={x.productimg} alt="no image" />

                  </div >
                  <div className='p-3'>
                    <h1>{x.productname}</h1>
                    <h2>Price:${x.productprice}</h2>
                    <p >{x.productdetails}</p>
                    <p className='mb-1'>Quantity :{
                      x.qty == 1 ? '1' : x.qty[x.id]

                    }</p>
                    <div className='w-full flex justify-between'>
                      <button className='absolute bottom-4 right-2 bg-red-400 rounded-xl w-[80px] hover:bg-red-600 duration-200 hover:shadow-xl' onClick={() => {
                        removeproduct(x.id)
                      }}>Cancel</button>
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
      {
        cart[0]==null?'':
      <div className='tracking-in-expand flex justify-center'>

        <div className='flex justify-center rounded-xl p-3 text-white gap-4 m-3 border w-[400px] items-center'> Total Price:${total} <button className='bg-green-300 rounded-xl w-[80px] hover:bg-green-500 duration-200 p-1 hover:shadow-xl' onClick={() => {
          navigate('/checkout')
        }} >Checkout</button>  </div>

      </div>
}
      
        




      

    </div>

  )
}

export default Cart
