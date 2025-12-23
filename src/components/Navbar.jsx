import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Authcontext } from '../contexts/Authcontext'
import { FaShoppingCart  } from "react-icons/fa";
import { LiaKissWinkHeartSolid } from "react-icons/lia";
import { FaBoxesPacking } from "react-icons/fa6";

const Navbar = () => {
  
  const {loginuser,logoutuser,scrolldowntar,targetref}=useContext(Authcontext)
  
  return (
    <div className={!loginuser?'flex justify-between p-3 bg-gradient-to-r from-red-900  border-white border-b-1 text-white bg-fit ':'flex justify-between items-center p-3 bg-gradient-to-r from-red-900 to-black  border-white border-b-1 text-white  '}>
        <div className=''>
           <div>
            {
            !loginuser?<Link className='flex justify-center animate-pulse hover:scale-103 duration-300 items-center w-30 border-t-2 border-b-2' to={'/'} ><h1 className='text-gray-400 font-[impact]   text-[38px]'>Z</h1 ><h2 className='font-[impact] text-2xl text-amber-300'>hoe.in</h2></Link>:''
              }
              </div>
              
              <div>

            {

              loginuser&&loginuser.role=='user'? <Link className='flex justify-center animate-pulse hover:scale-103 duration-300 items-center w-30 border-t-2 border-b-2' to={'/home'} ><h1 className='text-gray-400 font-[impact]   text-[38px]'>Z</h1 ><h2 className='font-[impact] text-2xl text-amber-300'>hoe.in</h2></Link>:''
            }
          </div>
          
          <div>
              

            {

              loginuser&&loginuser.role=='admin'? <Link to={'/adminhome'}>home</Link>:''
            }
          </div>
        </div>
        <div className='flex gap-3'>
          <div>


            {

              loginuser && loginuser.role=='user'? <Link className='flex gap-2 items-center  hover:bg-white duration-200 rounded-xl hover:text-black p-1 ' to={'/cart'}>Cart <FaShoppingCart className=''/></Link>:' '
            }
          </div>
           <div>


            {

              loginuser && loginuser.role=='user'? <Link className='flex gap-2 items-center  hover:bg-white duration-200 rounded-xl hover:text-black p-1 ' to={'/orders'}>Orders <FaBoxesPacking /></Link>:' '
            }
          </div>
            <div>


            {

              loginuser && loginuser.role=='user'? <Link className='flex gap-2 items-center  hover:bg-white duration-200 rounded-xl hover:text-black p-1 ' to={'/favouraties'}>Favours <LiaKissWinkHeartSolid className=' size-5' /></Link>:' '
            }
          </div>
          <div className='flex justify-center items-center'>


            {

              loginuser&&loginuser.role=='admin'? <Link to={'/addproducts'}>Addproducts</Link>:''
            }
          </div>
           <div className='flex justify-center items-center'>


            {

              loginuser? <Link to={'/userprofile'}>Profile</Link>:''
            }
          </div>
          
              

              <div className='  '>
          {
           
            loginuser?
           
           <button className='bg-red-500 rounded-xl w-20 p-2'  onClick={()=>{
            logoutuser()
           }
            
            }>logout</button>:
            
           ''
          }
          </div>
          <div className='flex justify-center items-center'>


            {

              !loginuser? <Link to={'/'} className='border-b' onClick={()=>{scrolldowntar(targetref)}}>sign in</Link>:''
            }
          </div>
        </div>
        

    </div>
    
  )
}

export default Navbar
