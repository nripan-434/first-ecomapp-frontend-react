import React, { useContext,useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { Authcontext } from '../contexts/Authcontext'
import { IoIosLogOut } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { LiaKissWinkHeartSolid } from "react-icons/lia";
import { ImCross } from "react-icons/im";
import { MdAccountBox } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaBoxesPacking } from "react-icons/fa6";
import { MdDomainAdd } from "react-icons/md";
import { IoHome } from "react-icons/io5";

const Navbar = () => {

  const { toggle,settoggle,loginuser, logoutuser, scrolldowntar, targetref } = useContext(Authcontext)
  return (
    <div className={!loginuser ? 'flex justify-between p-3 bg-gradient-to-r from-red-900  border-white border-b-1 text-white bg-fit ' : 'flex justify-between items-center p-3 bg-gradient-to-r from-red-900 to-black  border-white border-b-1 text-white  '}>
      <div className=''>
        <div>
          {
            !loginuser ? <Link className='flex justify-center animate-pulse hover:scale-103 duration-300 items-center w-30 border-t-2 border-b-2' to={'/'} ><h1 className='text-gray-400 font-[impact]   text-[38px]'>Z</h1 ><h2 className='font-[impact] text-2xl text-amber-300'>hoe.in</h2></Link> : ''
          }
        </div>
        <div>
          {
            loginuser && loginuser.role == 'user' ? <Link className='flex justify-center hover:scale-103 duration-300 items-center w-30 border-t-2 border-b-2' to={'/home'} ><h1 className='text-gray-400 font-[impact]   text-[38px]'>Z</h1 ><h2 className='font-[impact] text-2xl text-amber-300'>hoe.in</h2></Link> : ''
          }
        </div>
        <div>
          {
            loginuser && loginuser.role == 'admin' ? <Link className='flex justify-center hover:scale-103 duration-300 items-center w-30 border-t-2 border-b-2' to={'/adminhome'} ><h1 className='text-gray-400 font-[impact]   text-[38px]'>Z</h1 ><h2 className='font-[impact] text-2xl text-amber-300'>hoe.in</h2></Link> : ''
          }
        </div>
      </div>
     {/* mobileview */}
      <div className='relative md:hidden flex  justify-center items-center '>
          <div className={'flex  justify-center transition-all duration-300 ease-in-out items-center w-15'}>
          {!toggle && loginuser?  
        <GiHamburgerMenu onClick={()=>{settoggle(true)}}  className='text-[30px]' />:
        toggle && loginuser?
        <ImCross  onClick={()=>{settoggle(false)}} className='text-white text-[25px] ' />:''
          }
          </div>
           

           





        {
           loginuser?
          <div className={`  absolute right-0 top-10 bg-gray-800 rounded-xl overflow-hidden  flex flex-col  transtion-all duration-300 ease-in-out  z-5 ${toggle?'translate-x-0 opacity-100 pointer-events-auto':'translate-x-full opacity-0 pointer-events-none'}`}>
            <div className='flex justify-center items-center'>
          {
            loginuser && loginuser.role == 'user' ? <Link className={`flex gap-1 items-center hover:bg-white  duration-200  hover:text-black p-1 ${!toggle?'rounded-xl':'w-full p-3'}`} to={'/home'}><IoHome />Home </Link> : ' '
          }
        </div>
        <div className='flex justify-center items-center'>
          {
            loginuser && loginuser.role == 'admin' ? <Link className={`flex gap-1 items-center hover:bg-white  duration-200  hover:text-black p-1 ${!toggle?'rounded-xl':'w-full p-3'}`} to={'/adminhome'}><IoHome />Home </Link> : ' '
          }
        </div>
          <div className='flex justify-center items-center'>
          {
            loginuser && loginuser.role == 'user' ? <Link className={`flex gap-1 items-center hover:bg-white  duration-200  hover:text-black p-1 ${!toggle?'rounded-xl':'w-full p-3'}`} to={'/cart'}><FaShoppingCart  />Cart </Link> : ' '
          }
        </div>
        <div className='flex justify-center items-center'>
          {
            loginuser && loginuser.role == 'user' ? <Link className={`flex gap-1 items-center hover:bg-white  duration-200  hover:text-black p-1 ${!toggle?'rounded-xl':'w-full p-3'}`} to={'/orders'}><FaBoxesPacking />Orders </Link> : ' '
          }
        </div>
        <div className='flex justify-center items-center'>
          {
            loginuser && loginuser.role == 'user' ? <Link className={`flex gap-1 items-center hover:bg-white  duration-200  hover:text-black p-1 ${!toggle?'rounded-xl':'w-full p-3'}`} to={'/favouraties'}><LiaKissWinkHeartSolid className=' size-5' />Favours </Link> : ' '
          }
        </div>
        <div className='flex justify-center items-center'>
          {
            loginuser && loginuser.role == 'admin' ? <Link to={'/addproducts'} className={`flex gap-1 items-center hover:bg-white  duration-200  hover:text-black p-1 ${!toggle?'rounded-xl':'w-full p-3'}`}><MdDomainAdd />Addproducts</Link> : ''
          }
        </div>
        <div className='flex justify-center items-center'>
          {
            loginuser ? <Link className={`flex gap-1 items-center hover:bg-white  duration-200  hover:text-black p-1 ${!toggle?'rounded-xl':'w-full p-3'}`} to={'/userprofile'}> <MdAccountBox className='text-[20px]' />Profile</Link> : ''
          }
        </div>
        <div className=''>
          {
            loginuser ?
              <button className={`flex gap-1 items-center hover:bg-red-500  duration-200   p-1 ${!toggle?'rounded-xl':'w-full p-3'}`} onClick={() => {
                logoutuser()
              }
              }>Logout <IoIosLogOut  className='text-[20px]'/></button> :''
          }
        </div>
      </div>
      :''
        }
        </div>
        {
      <div className={loginuser?'hidden':'absolute right-7'} >
          {
            !loginuser ? <Link className='flex p-4 justify-center items-center underline hover:text-blue-800' to={'/'}  onClick={() => { scrolldowntar(targetref) }}>Sign in</Link> : ''
          }
        </div>
}
      {/* desktopview */}
      
      <div className='hidden md:block '>
          <div className='flex gap-3'>
        <div className='flex justify-center items-center'>
          {
            loginuser && loginuser.role == 'user' ? <Link className='flex gap-1 items-center active:scale-85  hover:bg-white duration-200 rounded-xl hover:text-black p-1 ' to={'/cart'}>Cart <FaShoppingCart className='' /></Link> : ' '
          }
        </div>
        <div className='flex justify-center items-center'>
          {
            loginuser && loginuser.role == 'user' ? <Link className='flex gap-1 items-center active:scale-85 hover:bg-white duration-200 rounded-xl hover:text-black p-1 ' to={'/orders'}>Orders <FaBoxesPacking /></Link> : ' '
          }
        </div>
        <div className='flex justify-center items-center'>
          {
            loginuser && loginuser.role == 'user' ? <Link className='flex gap-1 items-center active:scale-85 hover:bg-white duration-200 rounded-xl hover:text-black p-1 ' to={'/favouraties'}>Favours <LiaKissWinkHeartSolid className=' size-5' /></Link> : ' '
          }
        </div>
        <div className='flex justify-center items-center'>
          {
            loginuser && loginuser.role == 'admin' ? <Link className='flex gap-1 items-center  hover:bg-white duration-200 active:scale-85 rounded-xl hover:text-black p-1 active:scale-90 ' to={'/addproducts'} >Addproducts <MdDomainAdd /></Link> : ''
          }
        </div>
        <div className='flex justify-center items-center'>
          {
            loginuser ? <Link className='flex gap-1 items-center  hover:bg-white duration-200 active:scale-85 rounded-xl hover:text-black p-1 ' to={'/userprofile'}>Profile <MdAccountBox className='text-[20px]' /></Link> : ''
          }
        </div>
        
        <div className='   '>
          {
            loginuser ?
              <button className='flex gap-1 items-center  justify-center cursor-pointer active:scale-85 text-red-600 hover:text-white hover:bg-red-600 duration-300 rounded-xl  p-2' onClick={() => {
                logoutuser()
               
              }
              }>Logout <IoIosLogOut  className='text-[20px]'/></button> :''
          }
        </div>
        
      </div>
      
      </div>
      
    </div>

  )
}

export default Navbar
