import React, { useContext, useState } from 'react'
import { Productcontext } from '../contexts/Productcontext'
const Addproducts = () => {
  const { additem } = useContext(Productcontext)
  const [product, setProduct] = useState({
    productname: '',
    productdetails: '',
    productprice: '',
    productcat: '',

    productimg: '',
    fav: false

  })
  const handleinput = (e) => {
    const { name, value } = e.target
    setProduct((prev) => ({ ...prev, [name]: value }))


  }

  const submithandle = (e) => {
    e.preventDefault()
    additem(product)
    setProduct({
      productname: '',
      productdetails: '',
      productprice: '',
      productcat: '',
      productimg: '',
      fav: 'false'

    })


  }



  return (
    <div className='flex justify-center items-center  '>
      <div className='swing-in-top-fwd   flex flex-col m-20 gap-7 backdrop-blur-md bg-gradient-to-r from-red-900 to-black text-white shadow-6xl justify-center items-center p-6 w-[400px] rounded-xl hover:shadow-xl duration-200 hover:scale-101'>
        <h1 className=' tracking-in-expand font-bold  border-b'>ADD PRODUCTS</h1>
        <form onSubmit={submithandle} className='flex flex-col  gap-5' action="">

          <input onChange={handleinput} name='productname' value={product.productname} className='outline-0' type="text" placeholder='enter product name' />
          <input onChange={handleinput} name='productdetails' value={product.productdetails} className='outline-0' type="text" placeholder='enter product details' />
          <input onChange={handleinput} name='productprice' value={product.productprice} className='outline-0' type="number" placeholder='enter product price' />
          <input onChange={handleinput} name='productcat' value={product.productcat} className='outline-0' type="text" placeholder='enter product category' />
          <input onChange={handleinput} name='productimg' value={product.productimg} className='outline-0' type="text" placeholder='image url' />
          <button className='bg-white rounded-xl text-black  duration-150 hover:scale-101 '>ADD</button>
        </form>
      </div>
    </div>
  )
}

export default Addproducts
