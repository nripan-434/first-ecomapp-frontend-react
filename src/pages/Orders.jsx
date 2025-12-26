import React, { useContext } from 'react'
import { Ordercontext } from '../contexts/Ordercontext'

const Orders = () => {
  const {orders,removeitem}=useContext(Ordercontext)

 
  return (
    <div className='bg-gradient-to-r from-blue-900 to-black p-4 flex flex-col gap-4'>
      {
        orders[0]==null?<div className='text-white flex mt-8 justify-center h-screen'><h1>No orders yet!</h1></div>:''
      }
      {
        orders?.map((x,i)=>{
          return <div key={i} className=' border backdrop-blur-sm rounded-xl p-3 min-w-50  backdrop-blur-sm shadow shadow-2xl text-white  '>
            {
              x.items.map((e,i)=>{
                return <table key={i} className=' border-separate border-spacing-2 w-full'>
                  <tbody>
                  <tr className='   text-left border'>
                    <th className='underline'>productimg</th>
                    <th className='underline'>productname</th>
                    <th className='underline'>productdetails</th>
                  </tr>
                  <tr className='border'>
                    <td className='w-50'><img src={e.productimg} alt='no image' className=' rounded-xl h-30 object-cover w-70'  /></td>
                    <td className='align-top w-60'><h1>{e.productname}</h1></td>
                    <td className='align-top'><h1>{e.productdetails}</h1></td>
                  </tr>
                  </tbody>
                </table>
              })
            }
            <div className='flex flex-col gap-3 justify-end items-end'>
            <h1>Total Amount:{x.totalamt}</h1>
            <button className='bg-red-400 rounded-xl p-2 hover:sahdow-xl hover:scale-104 shadow' onClick={()=>{  removeitem(x)}}>cancel</button>

            </div>
             </div>
        })
      }
    </div>
  )
}

export default Orders
