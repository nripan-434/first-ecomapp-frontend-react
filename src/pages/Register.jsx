import React, { useState } from 'react'
import { useContext } from 'react'
import { Authcontext } from '../contexts/Authcontext'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Register = () => {
  const { regusers } = useContext(Authcontext)
  const [regdata, setregdata] = useState({
    name: '',
    email: '',
    password: '',
    image:'',
    role: 'user'
  })
  const inputhandle = (e) => {
    const { name, value } = e.target
    setregdata((prev) => ({ ...prev, [name]: value }))
    console.log(regdata)
  }
  const submithandle = (e) => {
    e.preventDefault()
    regusers(regdata)
    setregdata({
      name: '',
      email: '',
      password: '',
      image:'',
      role: 'user'
    })

  }
  return (
    <div className='min-h-screen flex justify-center items-center  bg-gradient-to-r from-red-900  '>
      <div className='swing-in-top-fwd  bg-color h-[390px] w-full mt-[70px] backdrop-blur-sm duration-200'>

        <h1 className=' text-white font-extrabold text-4xl min-h-[60px] '>Registration</h1>
        <form onSubmit={submithandle} action="" className=' flex flex-col gap-4 '>
          <input onChange={inputhandle} name='name' value={regdata.name} className='text-white bg-transparent outline-0' type="text" placeholder='enter user name' />
          <input onChange={inputhandle} name='email' value={regdata.email} className='text-white outline-0' type="text" placeholder='enter user email' />
          <input onChange={inputhandle} name='password' value={regdata.password} className=' text-white  outline-0' type="text" placeholder='enter user password' />
          <input onChange={inputhandle} name='image' value={regdata.image} className=' text-white  outline-0' type="text" placeholder='profile picture' />
          <button className='shake-top    text-white  border rounded-xl  p-2 hover:scale-101 duration-200 hover:bg-white mt-5 hover:text-black'>Register</button>
          <div className=' h-10 flex justify-center items-center'>
            <p className='text-gray-400'>have an account? <Link to={'/'} className='text-white border-b'>sign in</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
