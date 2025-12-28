import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Adminhome from './pages/Adminhome'
import { Authprovider } from './contexts/Authcontext'
import Adminuserdata from './pages/Adminuserdata'
import { Productprovider } from './contexts/Productcontext'
import Addproducts from './pages/Addproducts'
import Cart from './pages/Cart'
import { Cartprovider } from './contexts/Cartcontext'
import Footer from './pages/Footer'
import { Orderprovider } from './contexts/Ordercontext'
import Orders from './pages/Orders'
import { Toaster } from 'react-hot-toast'
import Favourites from './pages/Favourites'
import Checkout from './pages/Checkout'
import Adminprotected from './contexts/Adminprotected'
import Userprofile from './pages/Userprofile'
import Userprotected from './contexts/Userprotected'

const App = () => {
 
  return (
    <div className=' bg-gradient-to-r from-blue-900 to-black'>
        <Toaster />
      <Authprovider>
         <Productprovider>
        <Orderprovider>
        <Cartprovider>
       
      <Navbar/>
      <Routes>
    <Route path='/home' element={<Userprotected><Home/></Userprotected>}/>
    <Route path='/' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/adminhome' element={<Adminprotected><Adminhome/></Adminprotected>}/>
    <Route path='/adminuserdata' element={<Adminuserdata/>}/>
    <Route path='/addproducts' element={<Addproducts/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/orders' element={<Orders/>}/>
    <Route path='/favouraties' element={<Favourites/>}/>
    <Route path='/checkout' element={<Checkout/>}/>
    <Route path='/userprofile' element={<Userprofile/>}/>
      </Routes>
      <Footer/>
      </Cartprovider>
      </Orderprovider> 

      </Productprovider>
    </Authprovider>
    </div>
  )
}

export default App
