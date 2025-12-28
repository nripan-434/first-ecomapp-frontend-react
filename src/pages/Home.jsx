import React, { useState, useContext, useEffect } from 'react'
import { Productcontext } from '../contexts/Productcontext'
import { Link } from 'react-router-dom';
import { Cartcontext } from '../contexts/Cartcontext';
import Carousel from '../components/Carousel';
import Card from '../components/Card';
import { FaSearch } from "react-icons/fa";
import { useMemo } from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";
import toast from 'react-hot-toast';


const Home = () => {
  const {pdtsearch, products } = useContext(Productcontext)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const categories = ['all categories', 'sports category', 'casual shoes']
  const [catstate, setCatstate] = useState('all categories')
  const sportscat = useMemo(() => {
    return products.filter(x => {
      return x.productcat == 'sports'
    })
  })
  const casualcat = useMemo( () => {
    return products.filter(x => {
      return x.productcat == 'casual'
    })})
 
  const [qty, setQty] = useState({})
  useEffect(() => {
    defqty()
  }, [])
  const defqty = () => {
    setQty(1)

  }

  const [search,setSearch]=useState({
    name:''
  })
  const inputhandle =(e)=>{
    const {name,value} = e.target
    setSearch((prev)=>({...prev,[name]:value}))
    
  }
  const [prop,setprop]=useState(null)
  console.log(prop)
 
  const handlesubmit =(e)=>{
    e.preventDefault()

    if(!search.name){
      return toast.error('enter keyword')
    }
     const searchproduct=pdtsearch(search.name)
     setprop(searchproduct)

  }

  return (
    <div className='pt-9 scale-in-center pb-8 bg-gradient-to-r from-red-900 to-black backdrop-blur-sm '>
      <div>
        <Carousel />
      </div>

 <div className="swing-in-top-fwd slide-in-right m-5 max-w-6xl mx-auto bg-gray-800/60 backdrop-blur-md rounded-xl p-6 mb-8 shadow-lg text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome to Our Store</h1>
        <p className="text-gray-300">Discover amazing products and find what fits your lifestyle. Shop now and enjoy exclusive deals on sports and casual shoes!</p>
      </div>
      <div className='text-white flex gap-4 mt-4  justify-center'>
        <div className='mb-4 relative flex gap-4 border p-1 rounded-xl'>
          <div className="absolute top-0 left-0 h-full bg-white rounded-xl transition-all duration-300 ease-in-out" style={{
            width: hoveredIndex !== null ? `${100 / categories.length}%` : 0,
            transform: hoveredIndex !== null ? `translateX(${hoveredIndex * 100}%)` : `translateX(0)`
          }}></div>
          {categories.map((cat, i) => (
            <Link
              key={cat}
              to="#"
              onClick={() => {
                setCatstate(cat)
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative z-10 px-3 py-1 rounded-xl transition-all duration-300 ease-in-out"
              style={{
                color: hoveredIndex === i ? 'black' : 'white',
              }}
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>
      <div className=' p-2 '>
        
        <form onSubmit={handlesubmit} action="" className=' flex   justify-center '>
          <input type="text" onChange={inputhandle} name='name' value={search.name} className='bg-white  rounded-l-md   duration-200 pl-3 md:w-150 sm:w-80 p-1  shadow-3xl   outline-0' placeholder='Enter the item to search' />
          <button className='text-white  bg-white text-[25px] pr-2'><IoMdCloseCircleOutline onClick={()=>{setprop(null)
            setSearch({ name: '' })}}
             className='text-black hover:text-red-600 duration-300' /></button>
          <div className='flex flex-col items-center justify-center bg-red-600  w-8 rounded-r-md  '>
          <button type='submit' ><FaSearch className=' text-gray-300 hover:text-white duration-200   ' /></button>

          </div>
          
        </form>
      </div>
      <div className={prop?'border-b-2 text-white':''}>
        
        
        {
          prop==null?'':
       <Card products={prop}   qty={qty} setQty={setQty} />

        }
        
      </div>

      <div>
        {
          catstate == 'all categories' ? <>
            <Card products={products}  qty={qty} setQty={setQty} /></> : ''
        }
        {
          catstate == 'sports category' ? <>
            <Card products={sportscat}  qty={qty} setQty={setQty} />
          </> : ''
        }
        {
          catstate == 'casual shoes' ? <>
            <Card products={casualcat}  qty={qty} setQty={setQty} />
          </> : ''
        }
      </div>
      <div className='slide-in-left m-5 text-white  min-h-20 backdrop-blur-sm rounded-xl shadow-xl p-3 '>

        <h1>heading</h1>
        <p className='break-all'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit id deserunt fuga voluptatem nesciunt accusantium possimus, esse quos fugiat culpa error, neque minus sed, nostrum quo aspernatur sapiente et recusandae.</p>
      </div>
 <div className="max-w-6xl mx-auto bg-gray-800/60 backdrop-blur-md rounded-xl p-6 mb-8 shadow-lg text-white">
        <h1 className="text-2xl font-bold mb-2">Why Choose Us?</h1>
        <p className="text-gray-300">We provide the best quality sports and casual shoes with fast shipping and easy returns. Our user-friendly interface ensures a smooth shopping experience on any device.</p>
      </div>
    </div>
  )
}

export default Home



