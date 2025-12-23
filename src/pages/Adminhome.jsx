import React, { useContext } from 'react'
import { Authcontext } from '../contexts/Authcontext'
import { useNavigate } from 'react-router-dom'
import { Productcontext } from '../contexts/Productcontext'
import { IoMdRemoveCircle } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { RiAddCircleLine } from "react-icons/ri";

const Adminhome = () => {
  const { products, deleteproduct } = useContext(Productcontext)
  const { users, loginuser } = useContext(Authcontext)
  const navigate = useNavigate()
  const usercount = users.filter(x => {
    return x.role == 'user'
  })
  return (
    <div className='bg-gradient-to-r from-red-900 to-black  '>
      <div className='md:flex text-white  md:border-b-3  md:justify-center gap-5 bg-gradient-to-r from-red-900 to-black  '>
        <div className='scale-in-center p-3 flex flex-col   '>
          <div className='flex  text-white flex-col md:border-b-0 md:m-3 border-b-2  md:border-r-3 items-center justify-center p-3'>
            <img className='h-50  hover:border-2 rounded-full w-50 object-cover border duration-400 ' src={loginuser.image} alt="" />
            <h1>Name:{loginuser.name}</h1>
          </div>
          </div>

          <div className=' scale-in-center grid grid-cols-2 gap-3 p-7 sm:border-0 border-b-2 items-center text-white'>

            <div className='p-2 mt-2 outline-0 border-2 rounded-xl'>Users count:{usercount.length}</div>
            <button className='p-2 hover:bg-white hover:text-black duration-200 flex gap-3 items-center mt-3 outline-0 border-2 rounded-xl' onClick={() => {
              navigate('/addproducts')

            }} > <RiAddCircleLine />Add products</button>
            <button className='p-2 hover:bg-white hover:text-black duration-200 flex gap-3 items-center mt-3 outline-0 border-2 rounded-xl' onClick={() => {
              navigate('/adminuserdata')

            }} > <FaUsers /> Users details</button>


        </div>

      </div>

      <div className=' border-white bg-gradient-to-r from-blue-900 h-70 to-black  border-b-3 flex-3' >
        dashboard
      </div>
      <h1 className='flex justify-center text-white font-bold mt-2'>Products</h1>
      <div className=' p-6  grid grid-cols-3 gap-3'>
        {
          products.map(x => {
            return (
              <div className='scale-in-center  relative border bg-gradient-to-r overflow-hidden from-red-900 to-black border-white text-white rounded-xl ml-2  ' key={x.id}>
                <img className='w-full h-40 object-cover  hover: duration-200' src={x.productimg} alt="no image" />

                <div className='ml-3 mb-3 mt-2'>
                  <h1>{x.productname}</h1>
                  <h2>Price:${x.productprice}</h2>
                  <p>{x.productdetails}</p>
                </div>
                <button className='flex items-center justify-center bg-red-400 hover:bg-red-600 duration-200 rounded-xl absolute top-4 right-4 p-1 gap-1' onClick={() => {
                  deleteproduct(x)
                }}><IoMdRemoveCircle />remove</button>

              </div>
            )
          })
        }
      </div>
    </div>

  )
}

export default Adminhome
