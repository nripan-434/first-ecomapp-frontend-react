import React, { useContext } from 'react'
import { Authcontext } from '../contexts/Authcontext'

const Footer = () => {
  const {loginuser}=useContext(Authcontext)
  return (
   <div className=' '>
    <div className={!loginuser?'sticky bottom-0 w-full  p-6 text-white flex flex-col items-center  border-t border-white  gap-3 bg-gradient-to-r from-red-900  bg-bottom ':'sticky bottom-0 w-full  p-6 text-white flex flex-col items-center  border-t border-white  gap-3 bg-gradient-to-r from-red-900 to-black  bg-bottom '}>
      <h1>contact</h1>
     
      <h2>email</h2>
      <p>copyright</p>
    </div>
    </div>
  )
}

export default Footer
