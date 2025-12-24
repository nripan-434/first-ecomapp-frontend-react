import React, { useContext } from 'react'
import { Authcontext } from '../contexts/Authcontext'
const Adminuserdata = () => {
  const {users,deleteuser}=useContext(Authcontext)
  const userdata=users.filter(x=>{
    return x.role=='user'
  })
  return (
    
    <div className='h-screen to-black grid grid-cols-3 gap-4 text-white'>
   
      <div>
        {
        userdata.map(x=>{
               
          return <div className='scale-in-center m-5 border border-white p-3 rounded-xl' key={x.id}>
          <h1 className='font-bold text-lg  '>  {x.name}</h1>
          <h2 className='break-all'>{x.email}</h2>
          <p>details</p>
          <button className='border p-1 rounded-xl bg-red-500 text-white border-white' onClick={()=>{deleteuser(x)}}>remove user</button>
          </div>
        
        })
      }
      </div>
      </div>
 
  )
}

export default Adminuserdata
